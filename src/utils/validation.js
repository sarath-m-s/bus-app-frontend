const validateForm = (formData) => {
    const {
      registrationNumber,
      privateOrGovernment,
      driverName,
      contactNumber,
      routeStartsFrom,
      routeEndsAt,
      numOfIntermediateStops,
      intermediateStops
    } = formData;
  
    // Check if mandatory fields are filled
    if (
      !registrationNumber ||
      !privateOrGovernment ||
      !driverName ||
      !contactNumber ||
      !routeStartsFrom ||
      !routeEndsAt ||
      !numOfIntermediateStops ||
      !intermediateStops.every(stop => stop !== '')
    ) {
      return {
        isValid: false,
        error: 'All mandatory fields must be filled.'
      };
    }
  
    return {
      isValid: true,
      error: null
    };
  };
  
  export { validateForm };
  