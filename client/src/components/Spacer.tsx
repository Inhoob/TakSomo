import styled from 'styled-components/native';

interface Props {
  width?: string;
  height?: string;
}

const Spacer = styled.View<Props>`
  width: ${({width}) => (width ? `${width}px` : '100%')};
  height: ${({height}) => (height ? `${height}px` : '100%')};
`;

export default Spacer;
