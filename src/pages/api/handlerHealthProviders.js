const handlerHealthProviders = async (req, res) => {
  const {
    query: { first_name, last_name, city, state },
  } = req;

  try {
    const response = await fetch(
      'https://npiregistry.cms.hhs.gov/api/?version=2.1' +
        (last_name ? `&last_name=${last_name}` : '') +
        (first_name ? `&first_name=${first_name}` : '') +
        (city ? `&city=${city}` : '') +
        (state ? `&state=${state}` : '')
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.end(JSON.stringify({ error: error.message }));
  }
};

export default handlerHealthProviders;
