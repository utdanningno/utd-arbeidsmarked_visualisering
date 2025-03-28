import React, { Fragment, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { useData } from './useData';
import { defaultColors, prepareMore } from './utils';
import Visualization2 from './Visualization2';
import MissingData from './MissingData';

const Context2 = ({
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
  tooltipStyles,
  tooltipCaretStyles,
  api_url = 'https://v3.api.utdanning.no',
}) => {
  const [usedLimit, setUsedLimit] = useState(limit);
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
    setUsedLimit((oldLimit) => oldLimit + limit);
  }, []);

  return (
    <Fragment>
      {docs && docs.length ? (
        <Visualization2
          item={{
            parentId: item.main ? item.main.uno_id : id,
            subItems: dataset,
          }}
          layout={layout}
          disaggregate={!!disaggregateBy}
          disaggregateBy={disaggregateBy}
          disaggregateLabels={disaggregateLabels}
          tooltipContent={tooltipContent}
          moreLabel={moreLabel}
          colors={colors}
          tooltipStyles={tooltipStyles}
          tooltipCaretStyles={tooltipCaretStyles}
          onClickMore={handleClickMore}
        />
      ) : (
        <MissingData text={missingDataText} />
      )}
    </Fragment>
  );
};

Context2.propTypes = {
  id: PropTypes.string,
  direction: PropTypes.oneOf([
    'uno_id2nus',
    'uno_id2nus_kortnavn',
    'uno_id2styrk08',
    'nus_kortnavn2styrk08',
    'nus2styrk08',
    'styrk082nus',
  ]),
  limit: PropTypes.number,
  disaggregateBy: PropTypes.arrayOf(PropTypes.string),
  disaggregateLabels: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.object,
  missingDataText: PropTypes.string,
};

export default Context2;
