const driverValidateForm = (driverFormData) => {
    const {
        driverName,
        contactNumber,
        licenseNumber,
        organization,
        address
    } = driverFormData;

    // Check if mandatory fields are filled
    if (
        !driverName ||
        !contactNumber ||
        !licenseNumber ||
        !organization ||
        !address
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

export { driverValidateForm };
