import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
	</Theme>;
});