import { PersonProps } from "./Persontypes"

export const Person = (props: PersonProps ) => {
	return <div>
        {props.name.first} {props.name.last}
    </div>;
};
