import { mergeMap, catchError, filter } from "rxjs/operators";
import { from, of, merge } from "rxjs";

import { shipments } from "services";
import { fetchShipments } from "features/shipments";

export default {
  fetchShipments: (action$) =>
    action$.pipe(
      filter(fetchShipments.STARTED.match),
      mergeMap(() =>
        from(shipments.fetchShipments()).pipe(
          mergeMap((response) => of(fetchShipments.SUCCEDED(response.data))),
          catchError((error, source) =>
            merge(of(fetchShipments.FAILED(error.toString())), source)
          )
        )
      )
    ),
};
