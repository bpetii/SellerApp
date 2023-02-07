import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({items, name, numberOfColumns, PickerItemComponent, placeholder, width}) {
    const {setFieldValue, errors, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker 
                items={items}
                onSelectItem={(item)=> setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
                PickerItemComponent={PickerItemComponent}
                width={width}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    );
}

export default AppFormPicker;