export default function PageHeader({ children }) {
  return (
    <div className="bg-[#F9F5F5] relative">
      <div
        style={{
          width: 295,
          height: 295,
          flexShrink: 0,
          borderRadius: 295,
          opacity: 0.6,
          background: "#51C1BB",
          filter: "blur(197.5px)",
          left: 0,
          top: 0,
          position: "absolute",
        }}
      />
      <div
        style={{
          width: 295,
          height: 295,
          flexShrink: 0,
          borderRadius: 295,
          opacity: 0.6,
          background: "#51C1BB",
          filter: "blur(197.5px)",
          right: 0,
          top: 0,
          position: "absolute",
        }}
      />

      {/* <div
        style={{
          width: 588,
          height: 588,
          flexShrink: 0,
          borderRadius: 588,
          opacity: 0.6,
          background: "rgba(81, 193, 187, 0.40)",
          filter: "blur(197.5px)",
          right: "calc(50% - 290px)",
          top: "calc(50% - 200px)",
          position: "absolute",
        }}
      /> */}
      {children}
    </div>
  );
}
