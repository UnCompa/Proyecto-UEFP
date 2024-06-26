export function Bars() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-deep"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h16" />
      <path d="M7 12h13" />
      <path d="M10 18h10" />
    </svg>
  );
}

export function X({ height = 32, width = 32 }) {
  return (
    <svg
      height={`${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
    </svg>
  );
}

export function Diamond({ height, width }) {
  return (
    <svg
      fill="currentColor"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z" />
    </svg>
  );
}
export function Moon({ height = "", width = "", className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      class="icon icon-tabler icon-tabler-moon-filled"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
}
export function Sun({ height, width,className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-sun-filled ${className}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffffff"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
}

export function Wave({className}) {
  return (
    <svg
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        className={className}
        fill-opacity="1"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
}

export const IlustrationPerson = (props) => (
  <svg
    id="_0289_note_taking"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    data-imageid="note-taking-46"
    className="illustrations_image"
    style={{
      width: 300,
    }}
    {...props}
  >
    <defs>
      <style>
        {
          "\n                .cls-2_note-taking-46 {\n                  fill: #fff;\n                }\n                .cls-4_note-taking-46 {\n                  fill: #f4a28c;\n                }\n                .cls-5_note-taking-46 {\n                  fill: #a5a5a5;\n                }\n                .cls-6_note-taking-46 {\n                  fill: #e6e6e6;\n                }\n                .cls-10_note-taking-46 {\n                  fill: #68e1fd;\n                }\n                .cls-11_note-taking-46 {\n                  fill: #24285b;\n                }\n                .cls-12_note-taking-46 {\n                  fill: #000001;\n                  opacity: 0.08;\n                }\n              "
        }
      </style>
    </defs>
    <g id="tasks">
      <path
        className="cls-6_note-taking-46"
        d="M311.94 24.64h156.41v170.29H311.94z"
      />
      <path
        className="cls-5_note-taking-46"
        d="M336.02 45.85h27.2v27.2h-27.2z"
      />
      <path
        className="cls-2_note-taking-46"
        d="M347.8 67.63c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 54.76h63v10.82h-63z"
      />
      <path
        className="cls-5_note-taking-46"
        d="M336.02 95.3h27.2v27.2h-27.2z"
      />
      <path
        className="cls-2_note-taking-46"
        d="M347.8 117.09c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 104.21h63v10.82h-63z"
      />
      <path
        className="cls-5_note-taking-46"
        d="M336.02 141.51h27.2v27.2h-27.2z"
      />
      <path
        className="cls-2_note-taking-46"
        d="M347.8 163.29c-.69 0-1.33-.35-1.71-.92l-3.87-5.86a2.05 2.05 0 0 1 .58-2.85c.95-.63 2.22-.37 2.85.58l2.17 3.28 5.34-7.95c.63-.94 1.91-1.2 2.86-.56.94.63 1.19 1.91.56 2.86l-7.06 10.51c-.38.57-1.02.91-1.71.91ZM378.02 150.42h63v10.82h-63z"
      />
      <path
        className="cls-12_note-taking-46"
        d="M311.94 108.9s56.2 39.13 57.41 86.03h-33.34l-24.07-86.03Z"
      />
    </g>
    <ellipse
      className="cls-6_note-taking-46"
      cx={199.32}
      cy={448}
      rx={27.35}
      ry={155.55}
      transform="rotate(-89.76 199.325 448.004)"
      id="sd"
      style={{
        fill: "none",
        opacity: 0.45,
      }}
    />
    <g id="plant">
      <path
        d="M138.03 426.07s17.81-4.78 21.75-21.32c0 0-27.54-5.69-28.44 22.76l6.69-1.44Z"
        style={{
          fill: "#68e1fd",
          opacity: 0.58,
        }}
      />
      <path
        d="M135.86 424.29s12.51-19.6 1.65-38.01c0 0-21.01 13.22-11.8 38.01h10.15Z"
        style={{
          opacity: 0.73,
          fill: "#68e1fd",
        }}
      />
      <path
        className="cls-10_note-taking-46"
        d="M132.66 424.29s-6.48-20.78-26.31-24.79c0 0-3.78 13.46 12.75 24.79h13.56Z"
      />
      <path
        className="cls-11_note-taking-46"
        d="m145.56 423.88-3.71 24.66h-22.71l-3.24-24.66h29.66z"
      />
    </g>
    <g id="person">
      <path
        className="cls-10_note-taking-46"
        d="m221.97 112.12-51.07 40.6s-47.91 48.06-17.84 79.49c30.06 31.43 73.87-14.58 73.87-14.58l-4.95-105.51Z"
      />
      <path
        className="cls-12_note-taking-46"
        d="m221.97 112.12-51.07 40.6s-47.91 48.06-17.84 79.49c30.06 31.43 73.87-14.58 73.87-14.58l-4.95-105.51Z"
      />
      <path
        className="cls-11_note-taking-46"
        transform="rotate(-38.16 175.478 143.79)"
        d="M172.55 124.74h5.89v38.11h-5.89z"
      />
      <path
        className="cls-4_note-taking-46"
        d="M170.9 152.73s7.94-9.39 15.09-6.29c7.15 3.1 5.26 17.3-7.19 17.54-12.45.24-7.9-11.25-7.9-11.25Z"
      />
      <path
        className="cls-10_note-taking-46"
        d="M220.55 436.15s-3.21 6.04-9.03 5.7c-5.83-.34-8.14 5.07-3.18 7.28 4.97 2.21 19.27-2.53 19.27-2.53l1.04-10.61-8.1.15Z"
      />
      <path
        className="cls-4_note-taking-46"
        d="M246.01 49.22s-1.08 12.13.94 20.2c.82 3.27 4.19 5.29 7.46 4.42 4.05-1.08 9.21-3.71 10.58-10.14l3.66-10.63s2.06-6.74-4.79-11.69c-6.85-4.95-17.57.41-17.85 7.83Z"
      />
      <path
        className="cls-4_note-taking-46"
        d="m267.99 55 6.18 39.42-21.97 1.85 4.33-29.42L267.99 55z"
      />
      <path
        className="cls-4_note-taking-46"
        d="M258.92 59.67s.1-4.69 3.62-4.32c3.52.37 3.42 7.14-1.37 7.76l-2.25-3.45ZM245.72 56.89l-3.4 4.68a1.95 1.95 0 0 0 1.21 3.06l4.65.89-2.46-8.63Z"
      />
      <path
        d="M255.31 73.25s4.07-.82 7.14-4.23c0 0-.33 7.3-8.36 14.48l1.23-10.25Z"
        style={{
          fill: "#ce8172",
          opacity: 0.31,
        }}
      />
      <path
        className="cls-10_note-taking-46"
        d="m277.44 94.43-27.35 2.31s-54.2 15.94-52.01 66.89c2.19 50.96 7.1 113.36 7.1 113.36l72.91 9.53s121.2-164.95-.64-192.09Z"
      />
      <path
        className="cls-12_note-taking-46"
        d="M288.95 126.99S263.19 139.8 265 170.77c1.81 30.97-3.31 42.09-35.26 38.51-31.96-3.58-28.6 10.3-28.6 10.3l4.04 57.4 72.91 9.53 6.57-9.53s58.43-106.87 4.29-149.99Z"
      />
      <path
        className="cls-11_note-taking-46"
        d="m205.18 276.99-19.57 16.29c-22.81 18.99-19.55 54.94 6.3 69.51l37.54 21.16 12.48-9.1-28.09-23.31c-7.8-6.47-6.98-18.68 1.62-24.05l10.01-6.25c5.56-3.47 11.79-5.74 18.3-6.56 10.83-1.37 28.91-6.9 34.3-28.17l-72.91-9.53ZM245.72 33.62s-6.88 16.85 6.48 18.22c13.37 1.37 4.92 10.52 12.79 11.87 7.87 1.34 16.87-17.79 9.18-27.35-7.69-9.57-24.61-10.48-28.45-2.73Z"
      />
      <path
        className="cls-11_note-taking-46"
        d="M278.09 286.52 228.66 436l-12.41-.13s16.85-99.75 15.03-141.66l46.81-7.69Z"
      />
      <path
        className="cls-10_note-taking-46"
        d="M280.15 137.06c-2.09-18.77 20.2-29.87 33.93-16.91 14.14 13.35 29.1 34.84 33.03 67.67 7.95 66.49-15.45 131.89-118.35 26.22l10.47-12.12s51.13 35.31 66.26 29.27c11.54-4.61-20.67-52.41-25.33-94.14Z"
      />
      <path
        d="M280.15 137.06c-2.09-18.77 20.2-29.87 33.93-16.91 14.14 13.35 29.1 34.84 33.03 67.67 7.95 66.49-15.45 131.89-118.35 26.22l10.47-12.12s51.13 35.31 66.26 29.27c11.54-4.61-20.67-52.41-25.33-94.14Z"
        style={{
          opacity: 0.46,
          fill: "#fff",
        }}
      />
      <path
        transform="rotate(-7.21 202.982 194.054)"
        style={{
          fill: "#ffd200",
        }}
        d="M175.66 154.15h54.61v79.72h-54.61z"
      />
      <path
        className="cls-4_note-taking-46"
        d="M231.46 210.92s-21.17-10.22-16.02-17.91c5.15-7.69 23.78 8.93 23.78 8.93l-7.76 8.99Z"
      />
    </g>
    <g id="clock2">
      <circle
        className="cls-6_note-taking-46"
        cx={72.98}
        cy={73.29}
        r={41.33}
      />
      <circle
        className="cls-2_note-taking-46"
        cx={72.98}
        cy={73.29}
        r={29.22}
      />
      <path
        className="cls-5_note-taking-46"
        d="M72.98 78.19c-.49 0-.97-.18-1.35-.5-.45-.39-.71-.96-.71-1.56V56.5c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06v17.25l13.76-1.98a2.05 2.05 0 0 1 2.33 1.75c.16 1.13-.62 2.17-1.75 2.33l-16.11 2.32c-.1.01-.2.02-.29.02Z"
      />
    </g>
    <g id="clock1">
      <circle
        className="cls-6_note-taking-46"
        cx={72.98}
        cy={185.2}
        r={41.33}
      />
      <circle
        className="cls-2_note-taking-46"
        cx={72.98}
        cy={185.2}
        r={29.22}
      />
      <path
        className="cls-5_note-taking-46"
        d="M72.98 190.1c-.49 0-.97-.18-1.35-.5-.45-.39-.71-.96-.71-1.56v-19.63c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06v17.25l13.76-1.98a2.05 2.05 0 0 1 2.33 1.75c.16 1.13-.62 2.17-1.75 2.33l-16.11 2.32c-.1.01-.2.02-.29.02Z"
      />
    </g>
    <g id="notes">
      <path
        className="cls-6_note-taking-46"
        d="M311.94 289.47h156.41v106.32H311.94z"
      />
      <circle
        className="cls-12_note-taking-46"
        cx={332.76}
        cy={313.34}
        r={6.53}
      />
      <circle
        className="cls-12_note-taking-46"
        cx={332.76}
        cy={341.43}
        r={6.53}
      />
      <circle
        className="cls-12_note-taking-46"
        cx={332.76}
        cy={369.52}
        r={6.53}
      />
      <path
        className="cls-2_note-taking-46"
        d="M434.04 315.4h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06ZM434.04 343.49h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06ZM434.04 371.58h-77.13c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06h77.13c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06Z"
      />
    </g>
    <g id="calendar">
      <path
        className="cls-6_note-taking-46"
        d="M36.17 282.73h73.63v58.25H36.17z"
      />
      <path
        className="cls-5_note-taking-46"
        d="M36.17 271.78h73.63v19.25H36.17z"
      />
      <path
        className="cls-6_note-taking-46"
        d="M46.95 261.77h6.28v15.96h-6.28zM92.5 261.6h6.28v15.96H92.5z"
      />
      <path
        className="cls-2_note-taking-46"
        d="M58.19 304.92c1.39-1.16 3.23-1.74 5.51-1.74 1.55 0 2.88.27 3.99.81s1.94 1.28 2.51 2.2c.57.93.85 1.97.85 3.15 0 1.34-.35 2.47-1.04 3.4-.69.93-1.52 1.55-2.47 1.87v.13c1.23.38 2.2 1.06 2.89 2.04s1.04 2.23 1.04 3.77c0 1.28-.29 2.42-.88 3.42-.59 1-1.45 1.78-2.59 2.35-1.14.56-2.51.84-4.1.84-2.41 0-4.36-.61-5.87-1.82-1.51-1.21-2.31-3-2.4-5.36h4.34c.04 1.04.4 1.88 1.07 2.51.67.63 1.59.94 2.76.94 1.09 0 1.92-.3 2.51-.91.58-.61.88-1.39.88-2.35 0-1.28-.4-2.19-1.21-2.74-.81-.56-2.07-.83-3.77-.83h-.93v-3.67h.93c3.02 0 4.53-1.01 4.53-3.03 0-.91-.27-1.63-.81-2.14s-1.33-.77-2.35-.77-1.77.27-2.31.81-.86 1.23-.94 2.06h-4.37c.11-2.13.86-3.77 2.25-4.93ZM77 306.41c1.33-2.09 3.54-3.13 6.62-3.13s5.29 1.04 6.62 3.13 1.99 4.97 1.99 8.65-.67 6.61-1.99 8.72c-1.33 2.11-3.54 3.16-6.62 3.16s-5.29-1.05-6.62-3.16c-1.33-2.11-2-5.01-2-8.72s.67-6.57 2-8.65Zm10.53 4.68c-.2-1.07-.61-1.95-1.21-2.63-.61-.68-1.51-1.02-2.7-1.02s-2.09.34-2.7 1.02c-.61.68-1.01 1.56-1.21 2.63-.2 1.08-.3 2.4-.3 3.98s.1 2.97.29 4.07c.19 1.1.6 1.98 1.21 2.65.62.67 1.52 1.01 2.71 1.01s2.1-.34 2.71-1.01c.62-.67 1.02-1.55 1.21-2.65.19-1.1.29-2.45.29-4.07s-.1-2.9-.3-3.98Z"
      />
    </g>
  </svg>
);

export const ContactIlustration = ({height,width}) => {
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 708 555.86743" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="b10fb2cf-c586-4c5f-9fbf-e678f5ffa3db-288" data-name="Path 133" d="M890.46523,679.51478a211.72219,211.72219,0,0,1-46.19649,37.27045c-.39154.24069-.7897.4667-1.18925.70031l-27.639-24.46263c.29035-.26957.61188-.57235.95806-.90494C836.99246,672.563,939.22932,535.83823,946.042,502.54351,945.57186,505.31735,952.18923,614.09419,890.46523,679.51478Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path id="a32c10c7-75df-4179-a648-6a8d2a687209-289" data-name="Path 134" d="M849.6017,721.5053c-.52265.12466-1.0544.24137-1.58764.34772l-20.7355-18.35251c.40524-.14119.87883-.30927,1.42046-.49568,8.89662-3.15026,35.39436-12.66026,61.76413-23.49189,28.33447-11.64369,56.53311-24.79986,62.59765-33.227C951.75986,648.244,911.68646,707.62224,849.6017,721.5053Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path d="M890.08181,317.64639h-2.95289V236.75278a46.819,46.819,0,0,0-46.819-46.81906H668.92579a46.819,46.819,0,0,0-46.81911,46.81891v443.7888a46.819,46.819,0,0,0,46.819,46.81906H840.30972a46.819,46.819,0,0,0,46.81915-46.81888V375.22785h2.95294Z" transform="translate(-246 -172.06628)" fill="#3f3d56"/><path d="M877.1627,237.07439V680.21716a34.95659,34.95659,0,0,1-34.9693,34.95674H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674V237.07439a34.95435,34.95435,0,0,1,34.957-34.95674h20.89839a16.61888,16.61888,0,0,0,15.38341,22.87963h98.18146a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z" transform="translate(-246 -172.06628)" fill="#fff"/><path d="M823.59459,467.3551H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,467.3551Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path d="M823.59459,510.26233H672.22789a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h151.3667a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,823.59459,510.26233Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path d="M831.16637,457.75891H679.79967a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,457.75891Zm-151.3667-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z" transform="translate(-246 -172.06628)" fill="#3f3d56"/><path d="M831.16637,500.66614H679.79967a10.512,10.512,0,0,1-10.5-10.5V485.1886a10.512,10.512,0,0,1,10.5-10.5h151.3667a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,831.16637,500.66614ZM679.79967,476.6886a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h151.3667a8.50951,8.50951,0,0,0,8.5-8.5V485.1886a8.50951,8.50951,0,0,0-8.5-8.5Z" transform="translate(-246 -172.06628)" fill="#3f3d56"/><path d="M877.1627,237.07439V333.4641A103.53895,103.53895,0,0,1,747.28027,233.38945q0-4.24023.34076-8.39217h56.82649a16.60126,16.60126,0,0,0,15.384-22.87963H842.1934A34.95659,34.95659,0,0,1,877.1627,237.07439Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path d="M722.04076,709.15425c0,2.03176-.0758,4.03834-.23971,6.01965H669.98426a34.95435,34.95435,0,0,1-34.957-34.95674v-47.3998a77.07339,77.07339,0,0,1,87.01347,76.33689Z" transform="translate(-246 -172.06628)" fill="#f50057"/><path d="M304.12133,625.985a6.00681,6.00681,0,0,0,7.911-3.0669l46.67932-105.79394a13.3793,13.3793,0,0,0-17.0774-17.876h-.00012a13.19944,13.19944,0,0,0-6.75012,5.78027,13.64886,13.64886,0,0,0-.65442,1.293l-46.67932,105.794a5.99964,5.99964,0,0,0,3.06738,7.91162Z" transform="translate(-246 -172.06628)" fill="#f50057"/><path d="M356.79528,560.55725l-46.17176-10.26074,11.428-30.23193a31.94972,31.94972,0,0,1,34.299-23.62793l.44483.04931Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><path d="M450.055,627.49817a7.02814,7.02814,0,0,1-6.41186-4.17676L396.964,517.52747a14.38052,14.38052,0,0,1,25.60937-12.99707v-.00049a14.61775,14.61775,0,0,1,.70264,1.38818l46.6792,105.794a7.00007,7.00007,0,0,1-3.57862,9.23l-13.96142,6.15966-.00708-.01562A6.94406,6.94406,0,0,1,450.055,627.49817Z" transform="translate(-246 -172.06628)" fill="#f50057"/><path d="M385.48546,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6H400.245a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z" transform="translate(-246 -172.06628)" fill="#f50057"/><path d="M356.29308,591.16907a6.00671,6.00671,0,0,0-6,6V720.18323a6.00672,6.00672,0,0,0,6,6h14.75976a6.00672,6.00672,0,0,0,6-6V597.16907a6.00671,6.00671,0,0,0-6-6Z" transform="translate(-246 -172.06628)" fill="#f50057"/><circle cx="131.82814" cy="239.22404" r="51" fill="#f50057"/><path d="M394.79994,432.69926c3.30591-.09179,7.42029-.20654,10.59-2.522a8.13272,8.13272,0,0,0,3.20008-6.07275,5.47082,5.47082,0,0,0-1.86036-4.49315c-1.65551-1.39894-4.073-1.72707-6.67822-.96144l2.69922-19.72559-1.98144-.27148L397.596,421.84282l1.65466-.75928c1.91834-.87988,4.55164-1.32764,6.188.05518a3.51513,3.51513,0,0,1,1.15271,2.8955,6.14689,6.14689,0,0,1-2.38123,4.52784c-2.46667,1.80175-5.74621,2.03418-9.46582,2.13818Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><rect x="166.54982" y="228.55925" width="10.77161" height="2" fill="#2f2e41"/><rect x="132.54982" y="228.55925" width="10.77161" height="2" fill="#2f2e41"/><path d="M428.36168,628.11938l-18.356-134a6.00013,6.00013,0,0,0-5.94482-5.18566H390.20543a6.02466,6.02466,0,0,0,.08985-1v-5a6.00015,6.00015,0,0,0-6-6h-12a6.00014,6.00014,0,0,0-6,6v5a6.02466,6.02466,0,0,0,.08984,1H352.52965a6.00049,6.00049,0,0,0-5.94482,5.18566l-18.356,134a6,6,0,0,0,5.94434,6.81434h88.24414A6,6,0,0,0,428.36168,628.11938Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><path d="M399.79528,560.55725V496.486l.44482-.04931a31.96115,31.96115,0,0,1,34.31543,23.68017l11.41138,30.17969Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><path d="M375.25992,463.88179l-35.27546-13.69192c-5.76827-2.23892-11.56878-4.40968-17.30651-6.72569a19.72637,19.72637,0,0,1-6.66153-3.92617,13.09008,13.09008,0,0,1-3.32111-6.42695c-1.22347-5.17132-1.00226-10.82516-.915-16.10249a122.69927,122.69927,0,0,1,1.42174-17.24065,83.28557,83.28557,0,0,1,10.65027-30.38043c9.89272-16.23155,26.93718-28.44363,46.5429-27.469,9.07668.4512,18.20557,3.70824,24.94937,9.914a15.75138,15.75138,0,0,0,2.35507,2.28248,3.26776,3.26776,0,0,0,1.87567.12592q1.23442-.07942,2.47088-.12124a51.04308,51.04308,0,0,1,8.56551.35928,27.12111,27.12111,0,0,1,14.13035,5.86736c3.37014,2.89908,6.11233,6.99171,6.39451,11.53986a13.65989,13.65989,0,0,1-4.6143,11.15057c-4.20852,3.54694-10.2131,2.30024-15.26138,2.03278l-18.49376-.97979-9.37018-.49642c-1.92935-.10222-1.92373,2.89808,0,3l24.90494,1.31945c4.00221.212,8.127.73168,12.13244.49169a13.57368,13.57368,0,0,0,8.33317-3.35238,16.62754,16.62754,0,0,0,5.03664-15.60115c-1.284-6.13755-5.85183-11.21468-11.20665-14.23511-7.28613-4.1098-15.988-4.50357-24.14076-3.896l1.06066.43934c-9.22224-9.89816-23.34855-14.07733-36.61026-12.61482-14.00229,1.54417-26.45612,9.35584-35.40409,20.03753-9.97644,11.90941-15.413,26.75957-17.52653,42.02983a139.839,139.839,0,0,0-1.082,24.87973,31.35039,31.35039,0,0,0,1.85228,10.75107,15.39035,15.39035,0,0,0,7.22512,7.74612,103.39756,103.39756,0,0,0,11.46784,4.71084L342.436,454.3438l25.52829,9.90863,6.49811,2.5222c1.80087.699,2.581-2.2006.79752-2.89284Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><path d="M319.79528,361.93372a15.5,15.5,0,1,1,15.5-15.5A15.51744,15.51744,0,0,1,319.79528,361.93372Zm0-28a12.5,12.5,0,1,0,12.5,12.5A12.51408,12.51408,0,0,0,319.79528,333.93372Z" transform="translate(-246 -172.06628)" fill="#2f2e41"/><rect x="528.17702" y="440.81546" width="42.23651" height="42.23651" transform="translate(147.61407 -410.75474) rotate(37.40978)" fill="#f0f0f0"/><path d="M389.29528,228.93372a33.94883,33.94883,0,0,1,27.27734,13.70214l19.58984-25.6137-58.77881-44.95588-44.95556,58.779,25.33349,19.37585A34.003,34.003,0,0,1,389.29528,228.93372Z" transform="translate(-246 -172.06628)" fill="#f0f0f0"/><path d="M953,727.93372H247a1,1,0,0,1,0-2H953a1,1,0,0,1,0,2Z" transform="translate(-246 -172.06628)" fill="#3f3d56"/><path d="M780.68737,562.00305H708.8253a10.0113,10.0113,0,0,1-10-10v-4.97754a10.0113,10.0113,0,0,1,10-10h71.86207a10.0113,10.0113,0,0,1,10,10v4.97754A10.0113,10.0113,0,0,1,780.68737,562.00305Z" transform="translate(-246 -172.06628)" fill="#f50057"/><path d="M788.25939,552.40735H716.39708a10.512,10.512,0,0,1-10.5-10.5v-4.97754a10.512,10.512,0,0,1,10.5-10.5h71.86231a10.512,10.512,0,0,1,10.5,10.5v4.97754A10.512,10.512,0,0,1,788.25939,552.40735Zm-71.86231-23.97754a8.50951,8.50951,0,0,0-8.5,8.5v4.97754a8.50951,8.50951,0,0,0,8.5,8.5h71.86231a8.50951,8.50951,0,0,0,8.5-8.5v-4.97754a8.50951,8.50951,0,0,0-8.5-8.5Z" transform="translate(-246 -172.06628)" fill="#3f3d56"/></svg>
}