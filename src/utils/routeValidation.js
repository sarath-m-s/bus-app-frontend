const routeValidateForm = (routeFormData) => {
    const {
        routeName,
        numOfIntermediateStops,
        stops
    } = routeFormData;

    // Check if mandatory fields are filled
    if (
        routeName === '' ||
        numOfIntermediateStops == null ||
        !stops.every(stop => stop !== '')
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

export { routeValidateForm };
