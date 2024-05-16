import { CircularProgress } from "@mui/material";

export default function LoadingCircular() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress 
        size={80} // Adjust the size of the circular progress
        style={{
          color: 'linear-gradient(to right, #EC4899, #8B5CF6)', // Apply a gradient color
        }}
      />
    </div>
  );
}
