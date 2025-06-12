import React, { Fragment, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { useData } from './useData';
import { defaultColors, prepareMore } from './utils';
import Visualization from './Visualization';
import MissingData from './MissingData';

const Context3 = ({
  id = 'y_sykepleier',
  direction = 'uno_id2styrk08',
  layout = 'bars',
  limit = 8,
  disaggregateBy,
  disaggregateLabels,
  tooltipContent,
  colors = defaultColors,
  moreLabel,
  missingDataText = 'Missing data',
  api_url = 'https://v3.api.utdanning.no',
}) => {
  const [usedLimit, setUsedLimit] = useState(limit);
  const [total, setTotal] = useState();
  const item = useData(id, direction, api_url);
  const { docs } = item ? item.mapping || {} : {};
  const dataset = useMemo(
    () => prepareMore(docs, usedLimit),
    [docs, usedLimit]
  );

  // const customMoreLabel = moreLabel || direction.split("2")[1] === "styrk08"
  //   ? "yrkes-kategorier"
  //   : "utdannings-kategorier"

  const handleClickMore = useCallback(() => {
    setUsedLimit((oldLimit) => {
      const newLimit = oldLimit + limit;
      return newLimit > docs.length ? docs.length : newLimit;
    });
  }, [dataset, total]);

  return (
    <Fragment>
      {docs && docs.length ? (
        <Visualization
          item={{
            parentId: item.main.uno_id,
            subItems: dataset,
          }}
          layout={layout}
          disaggregate={!!disaggregateBy}
          disaggregateBy={disaggregateBy}
          disaggregateLabels={disaggregateLabels}
          tooltipContent={tooltipContent}
          moreLabel={moreLabel}
          colors={colors}
          onClickMore={handleClickMore}
        />
      ) : (
        <MissingData text={missingDataText} />
      )}
    </Fragment>
  );
};

Context3.propTypes = {
  id: PropTypes.string,
  direction: PropTypes.oneOf([
    'uno_id2nus',
    'uno_id2nus_kortnavn',
    'uno_id2styrk08',
  ]),
  limit: PropTypes.number,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object,
  missingDataText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Context3;
