interface ICardProps {
  title: string;
  children: React.ReactNode;
}
const Card = (props: ICardProps) => {
  return (
    <div style={{ border: "1px solid black", margin: "15px 10px 15px 10px" }}>
      <span>Title: {props.title}</span>

      <div>{props.children}</div>

      <div>Footer</div>
    </div>
  )
}



export function App() {
  return (
    <div>
      <h2>Hello world</h2>

      <p>Card:</p>
      <Card title="Surrender">
        Testando apenas
      </Card>
      <Card title="Surrender">
        Testando apenas
      </Card>
    </div>
  )
}
