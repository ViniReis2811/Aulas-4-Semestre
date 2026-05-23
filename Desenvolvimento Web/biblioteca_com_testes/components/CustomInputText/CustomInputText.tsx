// import styles from "./CustomInputText.module.css";

/**
 * Interfaces: usadas para definição de tipos de objetos
 *
 * interface NomeInterface {
 *  propriedade1: string;
 *  propriedade2: number;
 *  ...
 * }
 *
 * Exemplo:
 *
 * interface Pessoa {
 *  nome: string;
 *  idade: number;
 *  genero: string;
 * }
 *
 * let pessoa1: Pessoa;
 *
 *
 */

interface CustomInputTextProps {
  label: string;
  id: string;
  change?: (valor: string) => void;
}
/**
 *
 * @param props
 *   parametro que recebe as propriedades do componente
 * @returns
 *
 */
export const CustomInputText = (props: CustomInputTextProps) => {
  const label = props.label; // javascript
  const id = props.id;

  /**
   * Explicação: Ternário
   */
  // operador logico ===, !===, > , < , >=, <= ...

  // 1 === 2?(verdadeiro):(falso)

  const idade: number = 10;

  let maiorIdade: string;
  maiorIdade = idade >= 18 ? "maior idade" : "menor idade";

  return (
    <>
      <label htmlFor={id} style={1 === 1 ? { fontWeight: "bold" } : {}}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        // className={styles.custom_input}
        onChange={(e) => {
          const valor = e.target.value;
          if (!props.change) return;
          props.change(valor);
        }}
      ></input>
    </>
  );
};
