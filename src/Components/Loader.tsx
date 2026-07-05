import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <section className="dots-container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        {/* <div className="dot" />
        <div className="dot" /> */}
      </section>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .dots-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .dot {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: #60a5fa;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:last-child {
    margin-right: 0;
  }

  .dot:nth-child(1) {
    animation-delay: 0.1s;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      background-color: #60a5fa;
      box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.35);
    }

    50% {
      transform: scale(1.2);
      background-color: #2563eb;
      box-shadow: 0 0 0 10px rgba(96, 165, 250, 0);
    }

    100% {
      transform: scale(0.8);
      background-color: #60a5fa;
      box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.35);
    }
  }`;

export default Loader;
