interface Props
extends React.InputHTMLAttributes<
HTMLInputElement
>{

 label:string;

 error?:string;

}

export function Input({
 label,
 error,
 ...props
}:Props){

 return(

  <div>

   <label>

    {label}

   </label>

   <input

    {...props}

    className="
      w-full
      border
      rounded-lg
      p-3
    "

   />

   {error && (

    <p className="text-red-500">

      {error}

    </p>

   )}

  </div>

 );

}