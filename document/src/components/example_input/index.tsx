import Input from '@sceneui/input';
import { ChangeEvent, useCallback, useState } from 'react';

export default function ExampleInput({ placeholder = '' }: any) {
  const [value, setValue] = useState<string>();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Input value={value} onChange={handleChange} placeholder={placeholder} />
  );
}
