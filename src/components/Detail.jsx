/* eslint-disable react/prop-types */
export function Detail({ section }) {
  const { primaryText, secondaryText, list } = section;

  return (
    <>
      <div>
        <p>
          <span>
            {!primaryText[0].includes("|") ? (
              <strong>{primaryText[0]}</strong>
            ) : (
              <>
                <strong>{primaryText[0].split("|")[0]}</strong> |{" "}
                <em>{primaryText[0].split("|")[1]}</em>
              </>
            )}
          </span>
          <span>{primaryText[1]}</span>
        </p>

        {secondaryText && (
          <p>
            <em>{secondaryText[0]}</em>
            <em>{secondaryText[1]}</em>
          </p>
        )}
      </div>

      {list && (
        <ul>
          {list.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
