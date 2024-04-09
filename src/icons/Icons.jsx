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

export function X({ height, width }) {
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