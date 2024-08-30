const busValidateForm = (busFormData) => {
    const {
        busName,
        registrationNumber,
        privateOrGovernment
    } = busFormData;

    // Check if mandatory fields are filled
    if (
        !busName ||
        !registrationNumber ||
        !privateOrGovernment
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

export { busValidateForm };
