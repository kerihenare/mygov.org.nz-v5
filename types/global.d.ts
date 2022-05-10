export {};

declare global {
  namespace Data {
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

    interface ElectionRow {
      electorates: number;
      party: symbol;
      seats: number;
      votes: number;
    }

    interface ElectionResult {
      rows: ElectionRow[];
    }

    type ElectionResults = Record<Year, ElectionResult>;

    type Names = Record<symbol, string>;

    type Swatches = Record<symbol, string>;
  }
}
