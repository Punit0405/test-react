import { Formik, FieldArray, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Switch } from 'antd';

const DynamicForm = () => {
  const initialValues = {
    fields: [{ type: '', question: '', options: [], required: false }],
  };  

  const validationSchema = Yup.object().shape({
    fields: Yup.array().of(
      Yup.object().shape({
        type: Yup.string().required('Type is required')
        // label: Yup.string().when('type', {
        //   is: (val: any) => val === 'radio' || val === 'dropdown',
        //   then: Yup.string().required('Label is required'),
        // }),
        
      })
    ),
  });

  const handleAddField = (push: any) => {
    push({ type: '', question: '', options: [], required: false });
  };

  const handleAddOption = (pushOption: any, fieldIndex: any) => {
    pushOption('', fieldIndex);
  };

  const handleRemoveField = (remove: any, index: any) => {
    remove(index);
  };

  const ToggleSwitch = ({ field, form }: any) => {
    const handleChange = (checked: any) => {
      form.setFieldValue(field.name, checked);
    };

    return (
      <Switch
        checked={field.value}
        onChange={handleChange}
      />
    );
  };

  const renderFormFields = (values: any, push: any, remove: any) => {
    return values.fields.map((field: any, index: any) => {
      return (
        <div key={index}>
          <label htmlFor={`fields.${index}.type`}>Field Type</label>
          <Field
            as="select"
            name={`fields.${index}.type`}
            id={`fields.${index}.type`}
            validate={(value: any) => !value && 'Type is required'}
          >
            <option value="">Select type of question</option>
            <option value="text">Short Question</option>
            <option value="textarea">Long Question</option>
            <option value="checkbox">checkbox</option>
            <option value="file">Upload</option>
          </Field>
          <ErrorMessage name={`fields.${index}.type`} component="div" />

          {field.type && (
            <>
              <div>
                <Field
                  type="text"
                  name={`fields.${index}.question`}
                  id={`fields.${index}.question`}
                  placeholder="Enter Question"
                  validate={(value: any) =>
                    !value ? 'Question is required' : ''
                  }
                  style={{ border: 'none' }}
                />
                <Field name={`fields.${index}.required`} component={ToggleSwitch} />

              </div>
              {
                field.type === 'checkbox' ?
                  <>
                    <FieldArray name={`fields.${index}.options`}>
                      {({ push: pushOption, remove: removeOption }) => (
                        <div>
                          {field.options.map((option: any, optionIndex: any) => (
                            <div key={optionIndex}>
                              <Field type="checkbox" name={`fields.${index}.optionscheck.${optionIndex}`} />
                              <Field
                                type="text"
                                name={`fields.${index}.options.${optionIndex}`}
                                placeholder={`Option${optionIndex}`}
                                validate={(value: any) =>
                                  !value && 'Option is required'
                                }
                                style={{ border: 'none' }}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeOption(optionIndex)
                                }
                              >
                                Remove Option
                              </button>
                            </div>
                          ))}
                          <br />
                          <button
                            type="button"
                            onClick={() =>
                              handleAddOption(pushOption, index)
                            }
                          >
                            Add Option
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </> :
                  <Field
                    type={field.type}
                    name={`fields.${index}.answer`}
                    id={`fields.${index}.answer`}
                    placeholder="Client's answer"
                    readOnly
                    validate={(value: any) =>
                      (field.type === 'radio' || field.type === 'dropdown') && !value ? 'Label is required' : ''
                    }
                  />
              }
              <ErrorMessage name={`fields.${index}.question`} component="div" />
            </>
          )}
          <br></br>
          <button type="button" onClick={() => handleRemoveField(remove, index)}>
            Remove Field
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="fields">
              {({ push, remove }) => (
                <div>
                  {renderFormFields(values, push, remove)}
                  <br></br>
                  <button type="button" onClick={() => handleAddField(push)}>
                    Add Field
                  </button>
                </div>
              )}
            </FieldArray>
            <br></br>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
