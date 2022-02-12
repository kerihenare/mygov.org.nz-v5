export {};

declare global {
  type Year =
    | '2020'
    | '2017'
    | '2014'
    | '2011'
    | '2008'
    | '2005'
    | '2002'
    | '1999'
    | '1996';

  interface Election {
    r: Array<[symbol, number] | [symbol, number, number]>;
  }

  type Elections = Record<Year, Election>;

  type PartyMeta = Record<symbol, [string, string]>;
}
