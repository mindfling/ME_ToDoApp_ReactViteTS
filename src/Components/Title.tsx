// * simple Title H1 Заголовок

interface TitleProps {
  text: string;
}

export const Title = ({text}: TitleProps) => {
  return (
    <h1>{text}</h1>
  )
};
