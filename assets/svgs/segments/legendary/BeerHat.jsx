import * as React from "react";
import Svg, { Defs, Path, Text, TSpan, G, Circle } from "react-native-svg";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

function BeerHat(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth}
      height={windowWidth * (39 / 90)}
      viewBox="0 0 90 39"
      {...props}
    >
      <Defs>
        <Path id="prefix__b" d="M149.952 30.963H162.3v11.88h-12.348z" />
        <Path id="prefix__c" d="M123.302 23.652h19.782v12.246h-19.782z" />
        <Path id="prefix__d" d="M123.302 23.652h19.782v12.246h-19.782z" />
        <Path id="prefix__a" d="M123.302 23.652h19.782v12.246h-19.782z" />
      </Defs>
      <Path fill="purple" d="M40.5 0h9v39h-9z" />
      <Path fill="#0ff" d="M0 0h40.5v39H0zM49.5 0H90v39H49.5z" />
      <Path
        d="M76.568 34.522l.743.402s-.076.123-.132.221c-.103.182.061.427-.048.607-.927 1.529-2.367 4.7-2.548 4.757 0 0-.154.036-.24.076-.11.051-.19.158-.303.202-.217.084-.477.035-.71 0-.546-.082-1.07-.268-1.568-.482-.417-.18-.88-.346-1.17-.667-.05-.057.032-.296.027-.368-.016-.26.098-.596.098-.596l2.654-4.3s.531-.294.627-.538c.035-.088-.118-.213-.042-.278.143-.121.396.04.585.093.55.154 1.567.649 1.567.649z"
        fill="none"
        stroke="#000"
        strokeWidth={0.079}
        transform="matrix(0 -.69611 .74826 0 40.858 87.174)"
      />
      <Path
        d="M71.155 36.68s-.096.35-.172.514c-.066.142-.243.398-.243.398-.306.501-.397.353-.642.39-.09.015-.268-.066-.268-.066l-1.598-.915-1.599-.914-.225-.233c-.075-.078-.126-.198-.226-.233-.027-.01-.086.012-.086.012-.083.012-.062-.01-.075-.037-.025-.052.015-.118.033-.174.179-.58.414-1.03.731-1.66l.205-.405.06.079.061.079.236.011.237.012 1.775.87 1.774.872s.003.065.013.095c.021.067.03.114.099.185 0 0 .07.05.086.088.031.08-.002.258-.002.258l-.001.258z"
        fill="#e6e6e6"
      />
      <Path
        d="M71.305 36.067c-.012.125-.08.381-.173.663-.121.365-.188.515-.322.729-.093.148-.219.32-.28.382-.101.104-.127.115-.285.126a1.045 1.045 0 01-.284-.02.784.784 0 00-.135-.03c-.014.002-.033-.01-.042-.025-.023-.038-.835-.501-.836-.477 0 .01-.01.005-.02-.013a.815.815 0 00-.267-.151c-.014 0-.033-.013-.042-.028-.023-.036-1.095-.647-1.136-.647-.018 0-.032-.01-.032-.024 0-.013-.066-.056-.146-.094a1.113 1.113 0 01-.16-.087 3.39 3.39 0 00-.26-.157 1.644 1.644 0 01-.455-.369c-.182-.2-.221-.229-.305-.229-.093 0-.096-.003-.08-.097.038-.249.436-1.16.855-1.956l.093-.176.056.068c.048.06.088.071.3.087l.244.018 1.49.73c.818.403 1.61.79 1.76.862.25.12.273.137.297.233a.491.491 0 00.11.187c.092.092.094.113.055.495z"
        fill="#e6e6e6"
      />
      <Path
        d="M66.528 34.27a7.8 7.8 0 00-.493 1.196c-.025.066-.028.09-.017.128.012.041.021.048.06.044l.027-.003-.04.018c-.07.03-.075.03-.092-.014-.017-.04-.005-.097.046-.223.02-.047.045-.115.057-.15.052-.161.145-.382.28-.664.085-.178.223-.455.232-.465.012-.013 0 .013-.06.133zM67.534 33.532l-.088-.004c-.052-.003-.058-.004-.037-.007a.43.43 0 01.133.003l.02.007zM71.378 35.904c-.005.061-.038.269-.056.351-.046.22-.128.474-.234.725-.04.097-.169.38-.23.51-.109.227-.213.383-.323.485l-.04.036h-.035a.817.817 0 01-.106-.012.769.769 0 00-.133-.014c-.046 0-.058-.001-.049-.005a.201.201 0 01.062-.002c.2.013.293-.054.49-.355.106-.162.195-.304.226-.36.052-.096.107-.242.171-.46.018-.061.072-.23.12-.374l.088-.263v-.123c0-.083.003-.14.008-.174a.715.715 0 000-.207c-.009-.029-.025-.049-.087-.105a.383.383 0 01-.113-.258c-.003-.035.004-.024.023.036a.46.46 0 00.114.206c.049.058.067.085.08.12.023.06.032.154.024.243z"
        fill="#e6e6e6"
      />
      <Path
        d="M71.143 35.285c-.001-.002-.803-.397-1.782-.877-1.49-.732-1.782-.873-1.794-.873-.01 0-.013-.002-.01-.004.003-.002-.001-.004-.013-.008a.535.535 0 00-.146 0 1.809 1.809 0 01-.279-.016c-.014-.005-.02-.011-.044-.042a.457.457 0 01-.028-.037c0-.002.027.011.059.028a.57.57 0 00.086.04.57.57 0 00.193-.001.473.473 0 01.183.002 20.128 20.128 0 00.59.31c.393.2.753.373 1.616.778.746.349.929.437 1.126.54.158.082.239.131.243.15.003.01.003.015 0 .01z"
        fill="#e6e6e6"
      />
      <Path
        d="M71.372 35.942a7.116 7.116 0 01-.048.309v.004a4.38 4.38 0 01-.279.821c-.155.35-.253.55-.325.664l-.03.047-.04.001h-.038a3.638 3.638 0 00.155-.227c.166-.257.21-.337.263-.475.013-.034.057-.17.098-.3l.138-.426.063-.187.002-.126a3.09 3.09 0 01.013-.269v-.032c-.005.067-.009.112-.013.141-.004.025-.005.07-.005.157v.121l-.088.264c-.049.145-.1.302-.113.348-.053.182-.11.343-.148.424a2.868 2.868 0 01-.186.312l-.081.124c-.02.032-.052.079-.07.104l-.034.046-.497.001-.498.001-.308-.177c-.356-.203-.353-.202-.356-.196a2.448 2.448 0 00-.318-.183c-.01-.01-.242-.145-.543-.317-.605-.347-.596-.341-.607-.341a11.238 11.238 0 00-.437-.256l-.407-.233-.126-.131a1.759 1.759 0 01-.169-.189 1.05 1.05 0 00-.064-.08c-.04-.04-.088-.068-.119-.068a.197.197 0 00-.04.007c-.035.01-.062.012-.074.008-.009-.004-.01-.003-.003.002.004.003.014.005.028.005h.02l-.024.011c-.038.018-.06.023-.07.019-.014-.007-.025-.038-.025-.07 0-.036.01-.071.037-.144a1.447 1.447 0 00.026-.07c.003-.003.019-.045.046-.124.047-.134.098-.263.171-.426a16.947 16.947 0 01.308-.635c.001 0-.044.097-.1.214-.18.375-.27.593-.374.905l-.05.147c-.024.067-.027.09-.016.129a.109.109 0 00.011.028c.002 0 0-.006-.002-.016-.012-.04-.013-.045-.009-.07a.416.416 0 01.02-.064l.027-.081c.042-.131.102-.299.154-.43.119-.297.242-.555.573-1.207l.137-.272c.061-.121.062-.124.068-.116l.055.072c.046.058.052.064.067.07.015.006.047.009.226.018.2.01.246.011.227.008a.034.034 0 01-.015-.008.043.043 0 00-.02-.006l-.015-.002.013.004a.058.058 0 01.016.005.989.989 0 01-.126-.005c-.004-.001.014-.003.041-.004a.182.182 0 00-.01 0c-.163.004-.325-.005-.347-.02a.352.352 0 01-.052-.066c0-.001.018.007.04.018a.352.352 0 00.127.05.808.808 0 00.167-.006.897.897 0 01.111-.005l.056.002.072.038a.985.985 0 00.077.04.44.44 0 00.057.031l.058.031a2.846 2.846 0 00.194.101c0 .003.001.004.003.003h.004a1.317 1.317 0 00.141.073.558.558 0 00.094.047.047.047 0 00.013.01 9.95 9.95 0 01-.22-.103 9.351 9.351 0 00-.188-.088 20510.698 20510.698 0 013.21 1.574c.002-.002-.949-.47-2.094-1.032a6.285 6.285 0 01-.215-.108l.053.023a.98.98 0 00.059.028 2.298 2.298 0 00.153.072c0 .003.027.015.032.014a1.975 1.975 0 00.151.073.58.58 0 00.07.033 4.117 4.117 0 00.17.08 2.353 2.353 0 00.131.062 4.999 4.999 0 00.194.091 2.528 2.528 0 00.163.076c0 .003.02.011.026.01a1.391 1.391 0 00.137.066 3.25 3.25 0 00.17.08.404.404 0 00.07.033c0 .003.029.016.033.015a1.82 1.82 0 00.118.059 22.413 22.413 0 01.372.183c.136.07.244.132.268.155.005.005.01.012.01.015 0 .005-.006.003-.025-.007-.026-.014-.041-.02-.041-.018l.027.014.027.014.004.038a.462.462 0 00.063.184.313.313 0 00.075.08c.047.04.061.063.068.112.002.019.002.018 0-.006-.002-.04-.01-.055-.069-.113a.372.372 0 01-.112-.169c-.014-.043-.027-.132-.017-.116a.5.5 0 01.016.044.208.208 0 00.017.043c-.003.004.01.038.016.041.003.002.003.003.002.003-.005 0 .013.033.03.057l.048.062c.073.089.089.12.101.207a.969.969 0 010 .194zm-3.591-2.309c-.002 0 .003.004.012.009a.086.086 0 00.019.009c.002 0-.004-.004-.012-.01a.086.086 0 00-.02-.008zm-.038-.018c-.002 0 .002.003.008.007a.06.06 0 00.016.007c.002 0-.002-.003-.009-.007a.06.06 0 00-.015-.007zm-.045-.022c-.002 0 0 .002.005.005.004.003.01.005.012.005s0-.002-.005-.005a.037.037 0 00-.012-.005z"
        fill="#e6e6e6"
      />
      <Path
        d="M73.371 34.374l3.569 1.556-2.357 4.579-3.822-1.79z"
        fill="red"
        stroke="#000"
        strokeWidth={0.079}
        transform="matrix(0 -.69611 .74826 0 40.858 87.174)"
      />
      <Path
        d="M72.75 35.393l3.662 1.594-.976 1.89-3.745-1.715z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.079}
        transform="matrix(0 -.69611 .74826 0 40.858 87.174)"
      />
      <Text
        transform="matrix(.08754 -.21516 .19887 .08999 52.001 61.009)"
        fontWeight={400}
        fontSize={4.939}
        xmlSpace="preserve"
        style={{
          lineHeight: 1.25,
        }}
        fontStyle="normal"
        fill="#000"
        stroke="none"
        strokeWidth={0.106}
      >
        <TSpan x={123.303} y={28.158}>
          <TSpan>{"Beer"}</TSpan>
        </TSpan>
      </Text>
      <Text
        style={{
          lineHeight: 1.25,
        }}
        x={71.707}
        y={9.472}
        transform="matrix(.31109 -.73766 .57796 .30388 40.858 87.174)"
        fontWeight={400}
        fontSize={0.157}
        strokeWidth={0.076}
        xmlSpace="preserve"
        fontStyle="normal"
        fill="#000"
        stroke="none"
      >
        <TSpan x={71.707} y={9.472}>
          {"5.00%"}
        </TSpan>
      </Text>
      <G fill="#d40000" stroke="#000" strokeWidth={0.05}>
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.76398 0 0 1.43155 102.79 -12.28)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-.9664 0 0 1.00011 98.113 -3.626)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(.9664 0 0 1.00011 53.974 -5.238)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(0 -.75048 -.74484 0 81.784 19.392)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(.9664 0 0 1.00011 64.243 -3.434)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(0 -1.00011 -.9664 0 93.481 27.156)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(.7915 0 0 -.90453 63.025 33.896)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.02528 0 0 -1.00307 94.84 35.66)"
        />
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(.9664 0 0 -1.00011 52.007 32.021)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -1.00011 -.9664 0 80.77 36.948)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(-1.07498 0 0 -1.20245 87.234 35.96)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -1.11247 -1.16193 0 97.271 34.907)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(-1.07498 0 0 -1.20245 100.187 31.265)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 1.11247 -1.16193 0 97.415 -4.169)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 -1.06103 -.96927 0 83.406 36.929)"
          />
        </G>
      </G>
      <G>
        <G fill="#784421" stroke="#000" strokeWidth={0.265}>
          <Path
            d="M17.57-.92c-.608.187-1.149.557-1.604 1.002-.907.888-1.486 2.064-1.87 3.274-.55 1.727-.733 3.545-.936 5.345-.24 2.133-.514 4.268-.534 6.415a29.103 29.103 0 001.002 7.75c.83 3.119 2.14 6.087 3.14 9.155.822 2.518 1.486 5.199 3.23 7.193.872.996 2.015 1.788 3.306 2.082a4.742 4.742 0 001.971.04 4.062 4.062 0 001.783-.83c.52-.426.919-.988 1.202-1.598.282-.61.452-1.268.557-1.932.209-1.328.16-2.684.312-4.02.27-2.364 1.218-4.706 2.94-6.348 1.312-1.25 3.004-2.04 4.744-2.539a17.62 17.62 0 014.143-.668c-2.49-1.32-4.985-2.635-7.483-3.942-2.108-1.103-4.244-2.219-6.014-3.809-2.127-1.91-3.624-4.413-4.944-6.949-.612-1.173-1.207-2.418-1.203-3.741.001-.584.12-1.159.212-1.735.092-.576.158-1.166.055-1.74a3.133 3.133 0 00-1.537-2.138A3.197 3.197 0 0017.57-.92zM46.702-1.722c-.379.263-.726.59-.935 1.002-.16.314-.233.666-.27 1.016-.036.35-.038.704-.064 1.055-.098 1.335-.536 2.62-.735 3.943-.319 2.117-.02 4.273 0 6.414.017 1.785-.16 3.585.134 5.346.23 1.378.74 2.69 1.202 4.009.559 1.597 1.065 3.25 2.072 4.61.602.814 1.37 1.498 2.205 2.071 2.132 1.465 4.787 2.222 7.35 1.871.85-.116 1.699-.358 2.415-.831.717-.474 1.292-1.2 1.46-2.042.11-.554.044-1.131-.101-1.677-.145-.547-.366-1.07-.567-1.597-.404-1.056-.736-2.144-1.27-3.14-.664-1.239-1.618-2.292-2.472-3.408-1.373-1.794-2.518-3.808-3.007-6.014-.33-1.492-.355-3.035-.601-4.543-.192-1.174-.517-2.32-.802-3.475-.237-.96-.445-1.928-.735-2.873-.13-.426-.279-.85-.5-1.238-.221-.387-.52-.738-.903-.967-.457-.273-1.006-.357-1.537-.334a4.477 4.477 0 00-2.339.802z"
            transform="matrix(.3104 0 0 .30978 47.275 14.344)"
          />
        </G>
      </G>
      <G fill="purple">
        <Path d="M48.281 11.085l4.94.544-.396 3.85-5.497.959z" />
        <Circle
          cx={53.176}
          cy={11.582}
          stroke="#000"
          strokeWidth={0.26}
          r={0.002}
        />
        <Path d="M53.22 11.629l3.256 1.853 4.353.172 1.922.029.815-.091.433 2.283-3.765.036-5.238.03-2.171-.462.396-3.85M63.566 13.592l1.75.235 1.68.036.826-.033.655-.2.257-.553.481-1.011.178-.647.627-2.46.768-1.193 1.31-1.432.34-.673.113.14-.203.725-.565.562-.904 1.24-.565.958-.113 1.333 2.666-2.338.498-.328.113.304-1.83 1.825 2.191-.07 2.238-1.755.587-.14.113.444-2.282 1.52 1.808-.023-.61.421-1.56-.047-.633.421-2.282.094-.769.748-.79 1.684 1.559-.07 2.034-1.24 1.966-.654h2.057l1.627-.749 1.107-.374.626-.534.911-.752.271.257-.542.748-2.464 1.731 1.572.097 1.683-.027.135.421-3.118.304-2.712-.28-1.243.14-2.148 1.193.023.187 1.379-.234.972.795.926.96 1.401.911 2.012.187 1.79-.766 1.256-.728-.99 1.307-.971.608-1.673.351 2.396 1.544-.43.444-.203-.538-3.932-1.917-1.944-1.52-.882-.141.724 1.263.452 2.526 1.198 1.73.754 1.896.353.42-.43.561-.248-.771-1.424-2.737-.045.655.075 2.564.942 2.886-.43.28-.949-2.526-.203-1.52.158-1.567-.09-.608-.588-2.9-.565-1.287-.904-.959-1.085-.093-3.525.21-.543.117-.045.538 2.016 1.373 1.69 1.387.43 1.03-1.153-1.147-2.17-.982.498 3.25-.407.352-.655-4.093-1.515-1.427-2.427.414z" />
      </G>
      <G stroke="#000">
        <Path
          d="M56.285 13.609c-.15.012-.298.05-.435.112-.267.12-.488.327-.663.562a4.484 4.484 0 00-.433.763 37.587 37.587 0 00-.87 2.017c-.764 1.885-1.495 3.83-1.566 5.863-.021.588.014 1.178.121 1.755.18.967.57 1.903 1.184 2.67.73.913 1.744 1.557 2.801 2.055.775.364 1.59.66 2.437.784.696.101 1.403.084 2.105.056 1.261-.051 2.52-.138 3.777-.262l2.418-.784c.067.509.12 1.02.157 1.531.065.87.088 1.742.104 2.614.02.992.03 1.986.157 2.97.023.176.052.36.157.504.04.055.09.103.15.134.06.032.13.046.198.034a.363.363 0 00.18-.1c.051-.048.092-.105.133-.162.203-.28.42-.55.61-.84.359-.552.615-1.166.817-1.793.455-1.408.647-2.885.957-4.332.235-1.093.537-2.17.835-3.249.181-.653.361-1.306.54-1.96.445-.717.814-1.483 1.096-2.278.263-.741.452-1.512.505-2.297.045-.682-.015-1.38-.261-2.017a3.3 3.3 0 00-.766-1.176c-.395-.385-.888-.654-1.392-.878a8.511 8.511 0 00-1.618-.541c-.743-.163-1.518-.208-2.263-.056a4.275 4.275 0 00-1.897.915 4.438 4.438 0 00-1.252 1.774 8.278 8.278 0 00-.349 1.232c-.054.249-.108.502-.229.726-.06.112-.137.216-.234.3a.746.746 0 01-.337.17c-.18.035-.364-.006-.54-.057-.443-.128-.87-.318-1.322-.41-.738-.152-1.5-.038-2.25.041-.507.054-1.02.093-1.509.243-.327.1-.64.25-.922.444a6.477 6.477 0 01-.052-1.233l.087-2.558c.022-.662.032-1.328.156-1.98.027-.139.059-.277.073-.419a.991.991 0 00-.038-.42.712.712 0 00-.557-.467z"
          fill="#d38d5f"
          strokeWidth={0.071}
        />
        <Path
          d="M64.9 17.81a2.831 2.831 0 011.966-1.905c.238-.066.484-.102.73-.12.342-.027.687-.021 1.027.018.223.031.438.112.627.233.167.108.317.25.504.318.13.047.27.056.407.051.137-.005.274-.024.411-.033.301-.018.608.017.888.131.441.18.781.536 1.113.878.134.137.269.273.384.426.116.152.213.322.26.507.041.158.045.323.053.486.02.44.064.894-.087 1.307-.12.324-.35.594-.592.84-.363.368-.773.704-1.253.896-.434.174-.908.222-1.375.243a8.414 8.414 0 01-1.67-.075c-.592-.092-1.175-.271-1.688-.579A3.568 3.568 0 0164.9 17.81z"
          fill="#e9c6af"
          strokeWidth={0.071}
        />
        <Path
          d="M64.9 17.81c.15-.095.307-.182.467-.262.162-.08.329-.152.504-.198.415-.107.852-.06 1.28-.04.077.004.154.007.23.021.076.014.15.04.213.085a.51.51 0 01.148.185.712.712 0 01.024.594.881.881 0 01-.332.37c-.199.132-.428.21-.652.29-.225.082-.451.171-.64.318-.162.124-.29.286-.43.435-.14.15-.293.286-.456.41M73.148 20.2a4.257 4.257 0 00-.644-.878 2.43 2.43 0 00-.644-.504 1.113 1.113 0 00-.452-.13.885.885 0 00-.523.149.691.691 0 00-.26.299.638.638 0 00-.044.301.98.98 0 00.078.296c.065.154.159.295.226.448.142.321.163.68.21 1.027.029.22.07.438.121.654M68.293 18.352a.44.44 0 01.243-.467.579.579 0 01.315-.043c.107.013.21.046.312.08.287.097.572.205.87.261.048.01.097.017.145.03a.31.31 0 01.239.22.392.392 0 01.005.192.651.651 0 01-.198.324c-.11.106-.24.19-.383.243-.133.05-.275.072-.417.074a1.448 1.448 0 01-.766-.205.885.885 0 01-.226-.187.654.654 0 01-.14-.522z"
          fill="none"
          strokeWidth={0.071}
        />
        <Path
          d="M68.675 17.829c.13-.14.292-.25.47-.318.15-.057.31-.084.47-.074.085.005.17.02.25.054.078.033.15.084.203.151.087.112.112.257.156.392.027.084.062.165.105.243M68.293 18.352a.406.406 0 01.417.28c.015.046.021.096.016.144a.287.287 0 01-.05.136.263.263 0 01-.122.093M69.633 19.248a.656.656 0 010-.168.457.457 0 01.036-.134.255.255 0 01.202-.157.292.292 0 01.127.01.316.316 0 01.191.169"
          fill="none"
          strokeWidth={0.071}
        />
        <Path
          d="M65.2 19.783a3.469 3.469 0 01-.294-1.42c0-.334.02-.506.063-.54a3.72 3.72 0 01.248-.14c.61-.328.857-.378 1.674-.338.314.015.494.031.556.05.272.087.41.494.27.792a.729.729 0 01-.27.308c-.153.109-.274.166-.653.307-.325.121-.522.216-.665.321a4.835 4.835 0 00-.353.343c-.234.244-.333.34-.474.456-.028.023-.037.01-.101-.139zM71.248 21.804a7.49 7.49 0 01-.13-.76c-.084-.627-.113-.732-.309-1.113-.141-.275-.178-.393-.178-.566 0-.23.124-.409.371-.535.275-.14.53-.126.856.046.315.168.648.476.94.87.202.274.293.43.28.483-.022.092-.23.372-.451.604-.355.373-.663.624-.998.813-.22.124-.371.187-.381.158zM70.042 18.14a5.335 5.335 0 01-.76-.223 5.46 5.46 0 00-.415-.132l-.067-.01.058-.048c.308-.247.79-.318 1.057-.154.113.07.164.153.246.4.073.221.084.206-.119.167z"
          fill="#deaa87"
          strokeWidth={0.018}
        />
        <Path
          d="M69.169 19.201a1.562 1.562 0 01-.379-.127l-.126-.063.043-.068a.414.414 0 00-.008-.44.398.398 0 00-.258-.19c-.097-.024-.1-.03-.07-.127a.478.478 0 01.187-.256c.07-.044.098-.05.22-.05.123.002.178.016.487.126.428.152.488.17.742.22.11.022.226.055.255.074.149.097.15.35.003.53l-.057.069-.045-.046c-.115-.115-.31-.144-.422-.063-.081.06-.139.179-.15.313l-.01.111-.184-.002a2.484 2.484 0 01-.228-.01z"
          fill="#a05a2c"
          strokeWidth={0.018}
        />
        <Path
          d="M68.474 18.848a.737.737 0 01-.14-.392c0-.053.006-.063.039-.063.063 0 .176.065.225.127.06.076.09.178.078.26-.01.069-.071.154-.109.154-.012 0-.054-.039-.093-.086zM69.674 19.126c0-.096.062-.224.126-.26a.242.242 0 01.258.02c.038.027.068.06.068.073 0 .032-.195.15-.313.19l-.118.038c-.014.005-.021-.015-.021-.06z"
          fill="#502d16"
          strokeWidth={0.018}
        />
        <Path
          d="M66.396 17.987a.356.356 0 01.287-.214.62.62 0 01.322.074c.05.024.1.048.148.075M71.26 19.257a.617.617 0 01.365.075.348.348 0 01.157.159c.016.039.022.082.023.124 0 .043-.003.085-.006.128-.005.08-.005.162 0 .242M67.866 18.856a1.918 1.918 0 00.879.775c.384.164.826.191 1.227.074M68.963 19.201l-.174.41M72.008 18.445a.578.578 0 01.191.355M67.431 33.83c.044.14.109.273.192.393.077.113.17.214.27.308.088.084.184.164.295.215.143.065.305.08.461.065.302-.029.588-.166.818-.364a1.76 1.76 0 00.41-.513M67.918 34.568c-.02.297-.05.593-.087.887-.03.24-.065.479-.087.72-.018.204-.027.41-.026.616"
          fill="none"
          strokeWidth={0.071}
        />
        <Path
          d="M68.902 34.765a9.61 9.61 0 01-.14.485 2.353 2.353 0 01-.33.71c-.127.187-.277.36-.383.56-.07.131-.12.274-.148.42"
          fill="none"
          strokeWidth={0.071}
        />
        <Path
          d="M67.798 36.798c-.034-.044-.04-.128-.024-.311.031-.364.165-1.619.183-1.718l.015-.084.147.083c.115.065.207.083.417.084.168 0 .27.016.27.042 0 .067-.16.55-.236.707a5.593 5.593 0 01-.319.51 4.119 4.119 0 00-.327.554c-.07.17-.085.186-.126.133zM67.65 36.384c-.051-.16-.162-1.621-.166-2.183l-.001-.092.057.092c.032.05.12.162.196.247.13.148.136.163.117.336-.08.7-.161 1.434-.17 1.544-.007.102-.015.114-.033.056z"
          fill="#e9c6af"
          strokeWidth={0.036}
        />
        <Path
          d="M67.97 36.874c0-.094.192-.447.4-.732.223-.31.39-.664.502-1.069.07-.258.077-.267.23-.33.086-.035.25-.138.365-.229.115-.09.209-.159.209-.151 0 .063-.348.84-.5 1.118-.195.355-.683 1.056-.91 1.308-.127.14-.296.188-.296.085z"
          fill="#e9c6af"
          strokeWidth={0.036}
        />
        <Path
          d="M60.166 13.011a.512.512 0 00-.305.374.695.695 0 00.075.405c.06.126.137.243.195.37.062.134.101.277.165.41.113.233.295.422.453.626.118.152.226.318.383.43.097.069.212.115.33.13a.52.52 0 00.221-.015.341.341 0 00.18-.125.463.463 0 00.07-.233c.025-.337-.1-.665-.192-.99-.09-.317-.153-.642-.235-.962a1.62 1.62 0 00-.09-.274.631.631 0 00-.171-.23.667.667 0 00-.392-.13 1.067 1.067 0 00-.687.214z"
          fill="#e9c6af"
          strokeWidth={0.071}
        />
        <Path
          d="M60.166 13.011c.12.307.241.614.365.92.14.348.285.699.504 1.003.097.135.208.26.32.383.122.134.245.266.37.396M60.912 12.795c.017.231.05.46.099.687.07.327.173.647.283.964.046.133.093.266.147.396a3.6 3.6 0 00.425.752"
          fill="none"
          strokeWidth={0.071}
        />
        <Path
          d="M53.023 12.415a.685.685 0 01.374-.047c.127.02.248.077.348.16.082.066.15.15.2.242.066.12.102.255.113.392.02.245-.04.49-.13.719a3.063 3.063 0 01-.574.915c-.138.153-.291.296-.392.476-.036.064-.065.133-.11.192a.312.312 0 01-.081.075.205.205 0 01-.105.032.213.213 0 01-.112-.034.371.371 0 01-.088-.078c-.106-.126-.155-.289-.191-.448-.063-.275-.096-.556-.157-.831-.026-.117-.057-.235-.052-.355.007-.196.106-.374.191-.551.069-.142.13-.29.218-.42a1.194 1.194 0 01.548-.439z"
          fill="#e9c6af"
          strokeWidth={0.071}
        />
        <Path
          d="M53.232 12.35c-.15.263-.282.538-.392.821-.146.376-.255.774-.243 1.177.006.228.052.453.07.681.012.171.01.343-.01.514M53.84 12.667c-.098.17-.2.338-.304.504-.123.197-.25.393-.34.607a2.14 2.14 0 00-.147.616 2.5 2.5 0 00.026.663"
          fill="none"
          strokeWidth={0.071}
        />
      </G>
      <G fill="red" stroke="#000" strokeWidth={0.05}>
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.10344 0 0 .63772 92.258 -.005)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.1534 0 0 .64752 91.7 10.314)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(1.10344 0 0 .63772 61.923 7.799)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(1.10344 0 0 .63772 61.093 2.237)"
        />
        <Path
          d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
          transform="matrix(-1.10344 0 0 .63772 95.58 .062)"
        />
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(-1.06969 0 0 1.19157 100.558 -3.34)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(1.01553 0 0 .95412 64.494 3.145)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(.58232 0 0 -.57583 66.648 29.582)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(.7915 0 0 -.90453 62.548 37.61)"
          />
        </G>
        <G>
          <Path
            d="M17.4 13.003l-.365-.513-.719-.314-.794-.48-.29-.52-.198-.555.05-.735.38-1 1.15.247.52.653.249.653-.017.976-.174.678-.05.538zM15.464 8.885l1.571 3.605z"
            transform="matrix(0 .8191 -.87405 0 88.278 8.413)"
          />
        </G>
      </G>
      <G>
        <Path
          d="M65.592 16.139s1.783.305 2.646.549c.92.26 1.836.558 2.681.973.93.456 2.593 1.648 2.593 1.648s.742-1.074.882-1.68c.113-.486.055-1.002-.053-1.49-.097-.444-.244-.897-.529-1.271-.418-.55-1.025-.985-1.658-1.334a3.713 3.713 0 00-1.164-.408 5.093 5.093 0 00-1.764 0 5.369 5.369 0 00-1.764.69c-.43.26-.825.588-1.112.973-.315.423-.758 1.35-.758 1.35z"
          fill="red"
          stroke="#000"
          strokeWidth={0.067}
        />
        <Path
          d="M66.678 11.479l-2.632 5.203s-.432.051-.673.034c-.543-.04-1.114-.165-1.596-.391-.496-.233-1.337-.909-1.337-.909l.06-.283-.04-.328 2.466-4.597s.541-.248.627-.482c.029-.078-.118-.174-.063-.24.058-.07.197-.035.293-.02 1.005.165 1.847.777 2.779 1.15.11.044.313.023.332.129.016.089-.188.097-.229.18-.083.169.013.554.013.554z"
          fill="#e6e6e6"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Path
          d="M64.378 9.62s.388-.857.789-1.179c.238-.191.557-.345.878-.352.477-.01.935.234 1.332.47.49.291.877.74 1.233 1.13.183.201.353.396.543.612.26.296.594.543.94.76.497.31 1.06.574 1.602.819.47.211 1.287.614 1.287.614s1.49.525 2.21.698c.638.154 1.86.204 1.86.204s.965-.043 1.4-.077c.444-.035 1.412.13 1.3.08-.1-.044.53.122.778.223.282.115.628.2.794.432.136.19.128.45.083.673-.094.47-.72 1.282-.72 1.282l-.46-.222.711-1.056s.085-.362-.008-.51c-.091-.145-.3-.203-.473-.269-.428-.163-.919-.309-1.358-.296-.439.012-.392.005-2.095.066l-1.88-.255-1.395-.367-.355-.13-.347-.146-.113.183-.731-.315.086-.189c-.15-.057-.909-.389-1.34-.613l-1.901-1.126s-1.292-1.455-2.132-1.983c-.225-.141-.478-.303-.753-.3-.215.001-.427.113-.582.245-.36.305-.64 1.124-.64 1.124z"
          fill="#ff0"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Path
          d="M80.687 16.01l.743.401s-.076.123-.132.221c-.103.182.061.428-.048.607-.927 1.53-2.367 4.701-2.548 4.757 0 0-.153.036-.24.076-.11.051-.19.158-.303.202-.217.084-.477.035-.71 0-.546-.081-1.07-.267-1.568-.482-.417-.18-.88-.346-1.17-.667-.05-.057.032-.296.027-.368-.016-.26.099-.596.099-.596l2.653-4.3s.532-.294.627-.537c.035-.089-.118-.214-.042-.278.144-.122.397.04.585.092.55.155 1.568.65 1.568.65z"
          fill="none"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Path
          d="M66.528 16.374l-1.106 1.561-.9 1.331c0 .072-.029.302.083.355.33.16 1.18-.018 1.171.007l1.887-.195.543-.086.173.181-2.568.305-.836.06s-.469.049-.612-.091c-.15-.148-.077-.61-.077-.61l.946-1.357.941-1.558z"
          fill="#ff0"
          stroke="#000"
          strokeWidth={0.081}
        />
        <Path
          d="M73.105 19.012s-.403.874-.807 1.259c-.404.385-1.155.749-1.15.743.026.016-.563.1-.826.054l-.331-.058s-.292-.339-.398-.54c-.107-.201-.221-.639-.221-.639l-.2.008s.144.478.259.689c.114.211.282.47.39.573.109.102.02.058.247.124.228.067.747.097 1.168-.033.422-.13.886-.5 1.217-.797.33-.297.773-.93.773-.93l.13-.248z"
          fill="#ff0"
          stroke="#000"
          strokeWidth={0.088}
        />
        <Path
          d="M76.657 21.978s-.505-.13-.74-.23c-.204-.089-.572-.325-.572-.325-.72-.409-.506-.531-.56-.858-.02-.121.095-.358.095-.358l1.314-2.136 1.314-2.136.335-.302c.111-.1.284-.167.334-.301.014-.037-.018-.115-.018-.115-.017-.112.016-.084.053-.1.076-.035.17.02.251.043.833.24 1.48.553 2.384.978l.583.273-.114.081-.113.081-.016.316-.017.316-1.251 2.372-1.251 2.371s-.094.004-.138.017c-.096.03-.163.04-.265.133 0 0-.071.094-.127.114-.114.043-.37-.002-.37-.002l-.371-.002z"
          fill="#e6e6e6"
        />
        <Path
          d="M68.254 13.579l-.848 1.688 5.629 2.241.759-1.603z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.086}
        />
        <Path
          d="M71.3 20.985l-.152.029"
          fill="none"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Path
          d="M77.536 22.179c-.18-.017-.547-.107-.952-.232-.525-.162-.74-.25-1.047-.43a4.287 4.287 0 01-.55-.375c-.148-.135-.165-.17-.18-.38-.009-.128.004-.3.028-.38a.985.985 0 00.043-.181c-.001-.018.015-.043.037-.056.054-.031.72-1.116.685-1.117-.015 0-.007-.012.019-.027.05-.03.215-.302.217-.357 0-.018.018-.043.04-.056.051-.03.93-1.463.93-1.518 0-.023.015-.043.034-.043.019 0 .08-.087.135-.194.056-.107.112-.203.125-.214.013-.01.114-.166.225-.347.152-.25.28-.397.53-.609.287-.244.33-.296.33-.408 0-.125.003-.127.14-.108.356.052 1.665.585 2.808 1.144l.254.125-.099.074c-.085.064-.102.118-.124.4l-.025.327-1.051 1.99a497.106 497.106 0 00-1.237 2.353c-.171.335-.197.365-.334.398a.719.719 0 00-.27.147c-.131.122-.162.125-.71.074z"
          fill="#e6e6e6"
        />
        <Path
          d="M80.118 15.794a11.68 11.68 0 00-1.718-.659c-.095-.034-.129-.038-.185-.023-.058.016-.068.029-.062.08l.004.037-.026-.054c-.043-.092-.042-.1.02-.123.06-.022.14-.006.32.062.068.026.166.06.217.075.23.07.548.195.953.375.256.113.653.298.669.31.017.016-.02 0-.192-.08zM81.179 17.138c0-.02.001-.073.004-.118.005-.069.006-.076.01-.048a.535.535 0 01-.004.177l-.01.026zM77.771 22.276a7.615 7.615 0 01-.505-.075 6.307 6.307 0 01-1.041-.313 27.257 27.257 0 01-.732-.308c-.327-.145-.551-.284-.698-.431l-.052-.052v-.048c0-.026.009-.09.019-.142a.959.959 0 00.019-.177c0-.063.002-.078.008-.066a.25.25 0 01.003.082c-.02.269.077.392.51.655.233.142.436.261.516.302.139.07.348.143.662.23.087.023.328.096.536.16l.378.118h.177c.12 0 .2.003.25.01.098.013.247.012.298 0 .041-.012.07-.034.15-.116a.57.57 0 01.37-.152c.051-.004.035.006-.051.031a.677.677 0 00-.296.152.57.57 0 01-.173.108.919.919 0 01-.348.032z"
          fill="#e6e6e6"
        />
        <Path
          d="M78.66 21.961c.003-.001.57-1.073 1.26-2.381 1.05-1.992 1.254-2.381 1.255-2.398 0-.012.001-.017.004-.014.003.005.007 0 .012-.016.01-.03.01-.19 0-.195a2.25 2.25 0 01.022-.373c.008-.019.017-.028.06-.06a.658.658 0 01.055-.036.764.764 0 01-.041.078.735.735 0 00-.056.115.71.71 0 000 .259.589.589 0 01-.003.243 2.11 2.11 0 01-.077.137c-.083.14-.27.47-.369.65a72.748 72.748 0 00-1.116 2.162c-.502.996-.628 1.241-.775 1.505-.118.21-.19.32-.215.325-.016.004-.024.004-.017 0z"
          fill="#e6e6e6"
        />
        <Path
          d="M77.716 22.268a10.934 10.934 0 01-.344-.05.855.855 0 00-.106-.016.475.475 0 00-.075-.019 6.62 6.62 0 01-1.105-.354c-.502-.206-.788-.336-.953-.433l-.068-.04-.001-.052c-.001-.03 0-.053.001-.053.002 0 .023.015.049.032.06.042.13.086.278.175.368.223.483.283.681.352.05.017.243.077.431.132.188.055.463.138.611.184l.27.084.18.003c.099.001.21.006.248.01a2.485 2.485 0 00.185.008 3.597 3.597 0 01-.203-.019 2.092 2.092 0 00-.225-.006h-.174l-.38-.118a22.84 22.84 0 00-.5-.15 5.015 5.015 0 01-.608-.198 4.199 4.199 0 01-.449-.25 15.955 15.955 0 00-.178-.108 3.992 3.992 0 01-.15-.093l-.066-.045-.001-.665-.002-.665.254-.412c.293-.475.291-.471.283-.476-.004-.002.002-.01.014-.02.025-.022.22-.338.225-.365a29.9 29.9 0 00.479-.766c.498-.808.49-.795.49-.81 0-.008.007-.018.017-.027.01-.01.145-.222.351-.558l.335-.543.188-.168c.157-.142.202-.179.27-.226.046-.031.097-.07.115-.085.058-.054.098-.118.098-.16a.247.247 0 00-.01-.052c-.013-.049-.017-.084-.011-.1.005-.012.005-.013-.002-.004-.005.005-.008.019-.008.037v.028l-.016-.033c-.025-.052-.033-.08-.027-.093.01-.019.054-.034.1-.034.052 0 .103.012.207.049a2.182 2.182 0 00.102.035c.003.004.064.025.177.062.193.062.377.13.611.228a25.186 25.186 0 01.894.398c0-.001.004 0 .01.005.006.004.01.009.009.01-.001 0-.14-.06-.307-.135-.54-.24-.852-.36-1.3-.5a18.385 18.385 0 01-.211-.067c-.097-.032-.131-.035-.186-.02a.163.163 0 00-.04.014c-.001.002.009 0 .022-.003.059-.017.066-.018.101-.012.02.003.06.014.092.025.031.012.084.029.117.038.189.055.43.135.617.205.427.16.798.323 1.734.766l.39.183c.176.082.179.084.167.091a7.902 7.902 0 00-.103.074c-.082.06-.092.069-.1.09-.009.02-.013.062-.025.301-.015.268-.017.33-.012.304a.044.044 0 01.01-.02.055.055 0 00.01-.027l.002-.02-.005.018a.075.075 0 01-.008.02 1.23 1.23 0 01.007-.168c.002-.005.005.02.007.055a.227.227 0 000-.014c-.006-.217.007-.433.029-.463a.501.501 0 01.094-.07.31.31 0 01-.026.053.45.45 0 00-.071.17c-.006.05-.004.123.008.223.005.048.008.102.006.15l-.001.073-.055.097a1.28 1.28 0 00-.057.104.578.578 0 00-.045.075 1.241 1.241 0 01-.045.077 3.713 3.713 0 00-.145.26c-.004 0-.005.002-.004.004a1.716 1.716 0 00-.105.194.727.727 0 00-.068.125.064.064 0 00-.014.018c-.004.007-.008.012-.008.009 0-.003.07-.139.156-.303.086-.164.156-.3.155-.3a26664.163 26664.163 0 01-2.29 4.339c.003.002.675-1.268 1.483-2.8.084-.16.154-.289.155-.286a.495.495 0 01-.033.07 1.268 1.268 0 00-.04.08 2.979 2.979 0 00-.104.203c-.004 0-.02.037-.02.044l-.004.007a2.565 2.565 0 00-.101.195.753.753 0 00-.047.093 5.337 5.337 0 00-.115.227 3.049 3.049 0 00-.09.176 6.478 6.478 0 00-.13.26 3.274 3.274 0 00-.11.217c-.004 0-.015.027-.014.034a1.805 1.805 0 00-.095.183 4.211 4.211 0 00-.116.228.523.523 0 00-.046.093c-.004 0-.023.039-.02.044a2.371 2.371 0 00-.085.157 29.1 29.1 0 01-.264.498c-.1.182-.19.326-.223.358-.007.007-.017.013-.021.013-.007 0-.004-.007.01-.033.02-.035.03-.055.027-.055-.001 0-.011.016-.022.036l-.019.037-.055.005a.697.697 0 00-.264.084.439.439 0 00-.116.1c-.058.063-.09.082-.16.09-.027.004-.026.004.008.002.059-.003.08-.015.163-.093a.54.54 0 01.243-.15c.062-.019.19-.036.166-.023a.752.752 0 01-.062.021.312.312 0 00-.063.023.137.137 0 00-.059.022c-.002.003-.004.004-.004.002 0-.006-.047.018-.082.04-.018.012-.058.041-.089.065-.127.098-.172.119-.297.135-.064.009-.21.009-.279 0zm3.317-4.8c0-.002-.006.005-.013.016a.11.11 0 00-.012.026c0 .002.005-.005.012-.016a.11.11 0 00.013-.026zm.026-.05c0-.003-.004.002-.01.01a.077.077 0 00-.01.022c0 .002.005-.003.01-.012a.077.077 0 00.01-.02zm.031-.061c0-.003-.003 0-.007.007a.048.048 0 00-.007.016c0 .003.003 0 .007-.007a.048.048 0 00.007-.016z"
          fill="#e6e6e6"
        />
        <Text
          transform="matrix(.40292 .15533 -.15012 .30636 12.79 -19.146)"
          fontWeight={400}
          fontSize={5.292}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
          strokeWidth={0.106}
        >
          <TSpan x={149.951} y={35.791}>
            <TSpan>{"Beer"}</TSpan>
          </TSpan>
        </Text>
        <Path
          d="M62.926 10.208l3.588 1.624-2.364 4.588-3.69-1.615zM77.49 15.861l3.57 1.556-2.358 4.58-3.822-1.79z"
          fill="red"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Path
          d="M62.346 11.297l3.543 1.736-.923 1.806-3.597-1.69zM76.87 16.88l3.661 1.594-.975 1.891-3.746-1.716z"
          fill="#fff"
          stroke="#000"
          strokeWidth={0.079}
        />
        <Text
          transform="matrix(.3091 .11699 -.12928 .26577 27.198 -9.096)"
          fontWeight={400}
          fontSize={4.939}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
          strokeWidth={0.106}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
        >
          <TSpan x={123.303} y={28.158}>
            <TSpan>{"Beer"}</TSpan>
          </TSpan>
        </Text>
        <Text
          transform="matrix(.3091 .11699 -.12928 .26577 41.707 -3.62)"
          fontWeight={400}
          fontSize={4.939}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
          strokeWidth={0.106}
        >
          <TSpan x={123.303} y={28.158}>
            <TSpan>{"Beer"}</TSpan>
          </TSpan>
        </Text>
        <Text
          style={{
            lineHeight: 1.25,
          }}
          x={53.24}
          y={-11.662}
          transform="matrix(1.05969 .41574 -.43654 .7724 0 0)"
          fontWeight={400}
          fontSize={0.157}
          strokeWidth={0.076}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
        >
          <TSpan x={53.24} y={-11.662}>
            {"5.00%"}
          </TSpan>
        </Text>
        <Text
          style={{
            lineHeight: 1.25,
          }}
          x={66.807}
          y={-11.859}
          transform="matrix(1.05969 .41574 -.43654 .7724 0 0)"
          fontWeight={400}
          fontSize={0.157}
          strokeWidth={0.076}
          xmlSpace="preserve"
          style={{
            lineHeight: 1.25,
          }}
          fontStyle="normal"
          fill="#000"
          stroke="none"
        >
          <TSpan x={66.807} y={-11.859}>
            {"5.00%"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
}

export default BeerHat;
