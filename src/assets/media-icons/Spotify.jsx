function Spotify(props) {
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
      <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-.933 14a14.213 14.213 0 00-3.568.496c-.36.1-.558.439-.484.828.071.373.383.597.734.506.791-.204 1.59-.352 2.398-.42a9.943 9.943 0 012.882.157 8.214 8.214 0 013.06 1.324c.302.211.658.105.828-.232a.733.733 0 00-.226-.94c-.267-.18-.536-.357-.814-.513-1.518-.853-3.132-1.204-4.81-1.206zm-.93-3l-.366.005a13.99 13.99 0 00-3.195.487c-.435.121-.665.497-.544.877.123.384.545.577.99.467.367-.091.736-.18 1.11-.244a14.333 14.333 0 014.372-.057c1.533.207 2.987.622 4.323 1.358a.8.8 0 001.067-.245c.213-.328.097-.754-.28-.954-.362-.192-.728-.38-1.107-.542-1.903-.806-3.915-1.15-6.002-1.149-.245 0-.49-.008-.734.002zm.927-3.985a17.651 17.651 0 00-2.532.078c-.973.098-1.934.272-2.871.583-.492.163-.765.71-.624 1.234.145.538.643.84 1.142.68 1.193-.382 2.415-.541 3.652-.58a16.617 16.617 0 013.894.327c1.372.283 2.691.729 3.906 1.502.13.082.288.109.433.161l.01-.025c.06-.007.121-.009.18-.022.393-.09.669-.41.735-.847.058-.38-.115-.796-.454-.995-.457-.269-.917-.539-1.396-.756-1.942-.883-3.984-1.25-6.075-1.34z" />
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

export default Spotify
