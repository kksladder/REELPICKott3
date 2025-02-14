import { StyledInput, StyledLabel } from './style';

const InputField = ({ label, ...props }) => {
    return (
        <div>
            {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
            <StyledInput
                {...props}
                style={props.name === 'pw' || props.name === 'pwCheck' ? { marginBottom: '0' } : {}}
            />
        </div>
    );
};

export default InputField;
