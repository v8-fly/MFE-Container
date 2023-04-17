import React from "react"
import MarketingApp from "./components/MarketingApp"

// remotes: {
//     marketing: "marketing@http://localhost:8081/remoteEntry.js",
// },

// below marketing/ from abo=ve key marketing

//  ---->>>   /Marketing
// comes from remote exposes object in mArketing webpack.cofig
// exposes: {
//   "./MarketingApp": "./src/bootstrap",
// },

export default () => {
  return (
    <div>
      <h1>Hi There</h1>
      <hr />
      <hr />
      <hr />
      <h1>Test</h1>
      <MarketingApp />
    </div>
  )
}
