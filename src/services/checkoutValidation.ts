

const checkoutValidation = (name: string, lastName:string, telephone:string,email:string) =>{
    const errors = {
        name: '',
        lastName: '',
        telephone: '',
        email: ''
    }
    if (name == '') {
        errors.name = 'Debes llenar el nombre';
    }
    if (lastName == '') {
        errors.lastName = 'Debes llenar el apellido';
    }
    if (telephone == '') {
        errors.telephone = 'Debes llenar el telefono';
    }
    if (email =='') {
        errors.email = 'Debes llenar el email';
    }

    return errors;
}

export default checkoutValidation