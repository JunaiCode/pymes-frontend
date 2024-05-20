const Question = (props:any) => {
    const containerStyle = props.type === "text" ? "mb-4" : "w-full mt-4";
    const inputContainerStyle = props.type === "text" ? "" : "flex items-center";

    return (
        <div className={`bg-white rounded-lg shadow-md p-4 ${containerStyle}`}>
            {props.type === "text" ? (
                <>
                    <label
                        htmlFor={props.id}
                        className="block text-gray-700 font-bold mb-2"
                    >
                        {props.title}
                    </label>
                    <input
                        type="text"
                        id={props.id}
                        name={props.name}
                        placeholder={props.placeholder}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </>
            ) : (
                <div className={inputContainerStyle}>
                    <input
                        type="radio"
                        id={props.id}
                        name={props.name}
                        value={props.value}
                        className="cursor-pointer h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        onClick={props.handleCheck}
                        checked={props.answer === props.value}
                    />
                    <label className="ml-2" htmlFor={props.id}>{props.value}</label>
                </div>
            )}
        </div>
    );
};

export default Question;
