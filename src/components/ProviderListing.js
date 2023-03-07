import classes from './ProviderListing.module.css';

const ProviderListing = ({ providerInfo }) => {
  console.log('ProviderListing providerInfo: ', providerInfo);

  const mailingAddressData = providerInfo.addresses[0];
  const locationAddressData = providerInfo.addresses[1];

  const providerName = `${providerInfo.basic.first_name} ${
    providerInfo.basic.last_name
  }${
    providerInfo.basic.credential ? ', ' + providerInfo.basic.credential : ''
  }`;

  const renderAddress = (addressData) => (
    <div>
      <div className={classes.heading}>
        {addressData.address_purpose} Address:
      </div>
      <div>{addressData.address_1}</div>
      <div>
        {addressData.city}, {addressData.state}{' '}
        {addressData.postal_code.slice(0, 5) +
          '-' +
          addressData.postal_code.slice(5, 9)}
      </div>
    </div>
  );

  const mailingAddress = renderAddress(mailingAddressData);
  const locationAddress = renderAddress(locationAddressData);

  const taxonomy = (
    <>
      <div className={classes.heading}>Taxonomies:</div>
      {providerInfo.taxonomies.map((taxonomy, index) => (
        <div className={classes.flexCol} key={taxonomy.license + index}>
          <div>{taxonomy.primary && <em>Primary</em>}</div>
          <div>
            {' '}
            <strong>Code: </strong> {taxonomy.code}
          </div>
          <div>
            {' '}
            <strong>Description: </strong>
            {taxonomy.desc}
          </div>
          {taxonomy.state && (
            <div>
              {' '}
              <strong>State: </strong>
              {taxonomy.state}
            </div>
          )}
          {taxonomy.license && (
            <div>
              {' '}
              <strong>License: </strong>
              {taxonomy.license}
            </div>
          )}
        </div>
      ))}
    </>
  );

  const otherNames = (
    <>
      <div className={classes.heading}>Other Names</div>
      {providerInfo.other_names.map((name, index) => (
        <div key={name.first_name + name.last_name + index}>
          {name.first_name} {name.middle_name} {name.last_name}
        </div>
      ))}
    </>
  );

  return (
    <div className={classes.providerListing}>
      <h3>{providerName}</h3>

      <div className={classes.results}>
        <div className={classes.oneThird}>
          <div className={classes.heading}>
            NPI Number: {providerInfo.number}
          </div>
          <div>
            <strong>Phone Number: </strong>
            <br />
            {providerInfo.addresses[0].telephone_number}
          </div>
          {mailingAddress}
          {locationAddress}
        </div>

        <div className={classes.oneThird}>
          {providerInfo.taxonomies.length > 0 && taxonomy}
        </div>

        <div className={classes.oneThird}>
          {providerInfo.other_names.length > 0 && otherNames}
        </div>
      </div>
    </div>
  );
};

export default ProviderListing;
