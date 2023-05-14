import Button from "@mui/material/Button";

interface Props {
  text: string;
  color: string;
  onClick: () => void;
}
export function WideButton(props: Props) {
  return (
    <Button
      variant="contained"
      style={{
        textTransform: "none",
        background: props.color,
        width: "100%",
        borderRadius: "12px",
      }}
      size={"large"}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
