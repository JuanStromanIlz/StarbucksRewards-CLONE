function Facebook(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="prefix__valign-middle prefix__absoluteCenter"
      aria-hidden="true"
      style={{
        width: 32,
        height: 32,
      }}
      overflow="visible"
      fill= 'rgba(0,0,0,.87)'
      {...props}
    >
      <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3.404 4.8h-2.626c-1.542 0-2.792 1.161-2.792 2.594v2.055h-1.39c-.108 0-.196.081-.196.181v2.132c0 .1.088.181.195.181h1.391v7.076c0 .1.088.181.196.181h2.782c.108 0 .195-.081.195-.181v-7.076h2.018c.1 0 .186-.072.194-.166l.194-2.132c.01-.105-.08-.196-.195-.196h-2.21V7.936c0-.354.309-.641.69-.641h1.554c.108 0 .196-.082.196-.182V4.981c0-.1-.088-.181-.196-.181z" />
      <circle
        className="prefix__sb-icon-hover"
        fill="transparent"
        cx="50%"
        cy="50%"
        r="75%"
      />
    </svg>
  )
}

export default Facebook;
