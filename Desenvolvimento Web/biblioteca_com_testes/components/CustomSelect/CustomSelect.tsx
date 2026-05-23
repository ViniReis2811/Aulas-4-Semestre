interface CustomSelectProps {
  label: string;
  id: string;
  change?: (valor: string) => void;
}

export const CustomSelect = (props: CustomSelectProps) => {
  const { label, id, change } = props;
  return (
    <>
      <label htmlFor={id} style={1 === 1 ? { fontWeight: "bold" } : {}}>
        {label}
      </label>
      <select
        id={id}
        onChange={(e) => {
          const valor = e.target.value;
          if (!props.change) return;
          props.change(valor);
        }}
      >
        <option value="1">Machado de Assis</option>
        <option value="2">Clarice Lispector</option>
        <option value="3">Jorge Amado</option>
        <option value="4">Carlos Drummond de Andrade</option>
        <option value="5">Graciliano Ramos</option>
        <option value="6">Érico Veríssimo</option>
        <option value="7">Monteiro Lobato</option>
        <option value="8">Guimarães Rosa</option>
        <option value="9">Aluísio Azevedo</option>
        <option value="10">José de Alencar</option>
      </select>
    </>
  );
};
