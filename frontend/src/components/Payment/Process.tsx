import Button from "@mui/material/Button";

export function Process() {
  const moveExploer = () => {};
  return (
    <div>
      <p>The transaction is being processed</p>
      <p>Please don’t close this screen</p>
      <Button
        variant="contained"
        style={{
          textTransform: "none",
          background: "#D1D5DB",
          width: "100%",
          borderRadius: "12px",
        }}
        size={"large"}
        onClick={() => moveExploer()}
      >
        Tx hash
      </Button>
      <p>Featured add-ons</p>
    </div>
  );
}
