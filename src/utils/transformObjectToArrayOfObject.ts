interface ITransformObject {
  id: string;
  title: string;
  value: string;
}

export default function transformObjectToArrayOfObject(
  object: Record<string, any>
) {
  const transFormInArray = Object.entries(object);

  return transFormInArray.reduce((total: ITransformObject[], current) => {
    const newObj: ITransformObject = { id: "", title: "", value: "" };
    newObj.id = crypto.randomUUID();
    newObj.title = current[0];
    newObj.value = current[1];
    return (total = [...total, newObj]);
  }, []);
}
