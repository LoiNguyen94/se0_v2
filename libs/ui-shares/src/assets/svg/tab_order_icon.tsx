import SpringPathColor from './extra/spring_path_color';

export default function SvgTabOrderIcon({
  color = '#B6BDCB',
  colorFocus,
  keyFocus,
}: {
  color?: string;
  colorFocus?: string;
  keyFocus?: number;
}) {
  const focus = keyFocus !== 3;
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M0 0H30V30H0V0Z" fill="white" />
      <path
        d="M5 7.5C5 6.11929 6.11929 5 7.5 5H17.5C18.8807 5 20 6.11929 20 7.5V25H10C7.23858 25 5 22.7614 5 20V7.5Z"
        fill="white"
      />
      <SpringPathColor
        d={[
          'M3.75 7.5C3.75 5.42893 5.42893 3.75 7.5 3.75H17.5C19.5711 3.75 21.25 5.42893 21.25 7.5V26.25H10C6.54822 26.25 3.75 23.4518 3.75 20V7.5ZM7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5V20C6.25 22.0711 7.92893 23.75 10 23.75H18.75V7.5C18.75 6.80964 18.1904 6.25 17.5 6.25H7.5Z',
          'M8.75 10C8.75 9.30964 9.30964 8.75 10 8.75H15C15.6904 8.75 16.25 9.30964 16.25 10C16.25 10.6904 15.6904 11.25 15 11.25H10C9.30964 11.25 8.75 10.6904 8.75 10Z',
          'M8.75 15C8.75 14.3096 9.30964 13.75 10 13.75H15C15.6904 13.75 16.25 14.3096 16.25 15C16.25 15.6904 15.6904 16.25 15 16.25H10C9.30964 16.25 8.75 15.6904 8.75 15Z',
          'M8.75 20C8.75 19.3096 9.30964 18.75 10 18.75H15C15.6904 18.75 16.25 19.3096 16.25 20C16.25 20.6904 15.6904 21.25 15 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20Z',
        ]}
        focus={focus}
        colorFocus={colorFocus}
        color={color}
      />
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 7.5C3.75 5.42893 5.42893 3.75 7.5 3.75H17.5C19.5711 3.75 21.25 5.42893 21.25 7.5V26.25H10C6.54822 26.25 3.75 23.4518 3.75 20V7.5ZM7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5V20C6.25 22.0711 7.92893 23.75 10 23.75H18.75V7.5C18.75 6.80964 18.1904 6.25 17.5 6.25H7.5Z"
        fill={!focus ? color : colorFocus}
      />
      <path
        d="M8.75 10C8.75 9.30964 9.30964 8.75 10 8.75H15C15.6904 8.75 16.25 9.30964 16.25 10C16.25 10.6904 15.6904 11.25 15 11.25H10C9.30964 11.25 8.75 10.6904 8.75 10Z"
        fill={!focus ? color : colorFocus}
      />
      <path
        d="M8.75 15C8.75 14.3096 9.30964 13.75 10 13.75H15C15.6904 13.75 16.25 14.3096 16.25 15C16.25 15.6904 15.6904 16.25 15 16.25H10C9.30964 16.25 8.75 15.6904 8.75 15Z"
        fill={!focus ? color : colorFocus}
      />
      <path
        d="M8.75 20C8.75 19.3096 9.30964 18.75 10 18.75H15C15.6904 18.75 16.25 19.3096 16.25 20C16.25 20.6904 15.6904 21.25 15 21.25H10C9.30964 21.25 8.75 20.6904 8.75 20Z"
        fill={!focus ? color : colorFocus}
      /> */}
      <path
        d="M20 11.25C20 10.5596 20.5596 10 21.25 10H22.5C23.8807 10 25 11.1193 25 12.5V20C25 22.7614 22.7614 25 20 25V11.25Z"
        fill="white"
      />
      <SpringPathColor
        d={[
          'M18.75 11.25C18.75 9.86929 19.8693 8.75 21.25 8.75H22.5C24.5711 8.75 26.25 10.4289 26.25 12.5V20C26.25 23.4518 23.4518 26.25 20 26.25V25H18.75V11.25ZM21.25 23.5366C22.7065 23.0218 23.75 21.6328 23.75 20V12.5C23.75 11.8096 23.1904 11.25 22.5 11.25L21.25 11.25V23.5366Z',
        ]}
        focus={focus}
        colorFocus={colorFocus}
        color={color}
      />
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 11.25C18.75 9.86929 19.8693 8.75 21.25 8.75H22.5C24.5711 8.75 26.25 10.4289 26.25 12.5V20C26.25 23.4518 23.4518 26.25 20 26.25V25H18.75V11.25ZM21.25 23.5366C22.7065 23.0218 23.75 21.6328 23.75 20V12.5C23.75 11.8096 23.1904 11.25 22.5 11.25L21.25 11.25V23.5366Z"
        fill={!focus ? color : colorFocus}
      /> */}
    </svg>
  );
}
