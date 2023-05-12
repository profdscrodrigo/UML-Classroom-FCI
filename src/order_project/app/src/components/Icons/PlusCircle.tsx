import { SvgXml } from 'react-native-svg';

interface PropsPlusCircle {
  width?: number,
  height?: number,
  color?: string,
}

export function PlusCircle({ width=22, height=24, color="#D73035"  }: PropsPlusCircle ) {
  const markup = `<svg width="${width}" height="${height}" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 8V16" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 12H8" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={markup} />;
}
