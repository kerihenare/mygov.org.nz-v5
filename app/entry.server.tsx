import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { ServerStyleSheet } from 'styled-components';

/**
 *
 * @param request
 * @param responseStatusCode
 * @param responseHeaders
 * @param remixContext
 */
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();

  const markup = renderToString(
    sheet.collectStyles(
      <RemixServer context={remixContext} url={request.url} />
    )
  );

  const styles = sheet.getStyleTags();
  const body = '<!DOCTYPE html>' + markup.replace('__STYLES__', styles);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
