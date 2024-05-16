import { Button } from "@mui/material";

export default function CustomButton({ onClick, img, text, fontSize, fontWeight, width, btn_style, type }) {
  return (
    <Button
      variant="contained"
      className="poppins"
      style={{
        padding: "10px 10px",
        borderRadius: "35px",
        color: "#fff",
        transition: "background-color 0.4s ease-in-out",
        background: 
          (btn_style === 'colorful') ? 'linear-gradient(to right, #8B5CF6, #EC4899)' :
          (btn_style === 'alert') ? '#ff0000' :
          (btn_style === 'confirm') ? '#a100ad' : '#b73d96',
        "&:hover": {
          background: 
            (btn_style === 'colorful') ? 'linear-gradient(to right, #EC4899, #8B5CF6)' :
            (btn_style === 'alert') ? '#930909' :
            (btn_style === 'confirm') ? '#690070' : '#6f3b70',
        },
        fontWeight: fontWeight ? fontWeight : "500",
        fontSize: fontSize ? fontSize : "1rem",
        textTransform: "none",
        maxWidth: width && width,
        minWidth: width && width,
        marginY:"10px",
        whiteSpace: "nowrap",
        flexGrow: "1",
        maxHeight: "4rem",
      }}
      onClick={onClick}
      type={type && type}
    >
      {img && <img src={img} style={{ filter: "invert(100%)", width: "30px", paddingRight: "10px" }} alt="Button Image" />}
      {text}
    </Button>
  );
}