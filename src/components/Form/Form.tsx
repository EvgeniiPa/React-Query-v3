import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";
import { axiosCreatePost } from "../../axios/axios";
import { useMutation } from "react-query";

interface DataType {
  body: string | number;
  id: number |string,
  title: string | number;
  userId: string | number;
}

export default function Form() {
    const { register, handleSubmit, reset } = useForm();

    const mutation = useMutation(newPost => axiosCreatePost(newPost))


    const onSubmit = (data: DataType) => {
        console.log(data);
        mutation.mutate(data)
        reset();
     };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input type="number" placeholder="id" {...register("id")} />
      <input type="text" placeholder="body" {...(register("body"))}/>
      <input type="text" placeholder="title" {...(register("title"))}/>
      <input type="number"  placeholder="userId" {...(register("userId"))}/>

      <Button text="Submit" />
    </form>
  );
}
