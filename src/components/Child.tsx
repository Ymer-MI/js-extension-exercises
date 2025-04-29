interface ChildProps {
    name: string;
    age: number;
}

export default (props: ChildProps) => <><h2>{props.name} <span>{props.age}</span></h2></>