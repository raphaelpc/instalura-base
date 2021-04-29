import { ChangeEvent, FormEvent, useState } from 'react';

type FormValues = {
  [propName: string]: string;
}

interface useFormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

export default function useForm({ initialValues, onSubmit }: useFormProps) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event: ChangeEvent<HTMLInputElement>) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues(currentValues => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
}
