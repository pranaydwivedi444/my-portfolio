import React from "react";
import Card from "../UI/Card.component";
import "./TechStack.styles.css";

function TechStack() {
  const techIcons = [
    {
      name: "react",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={80}
          height={80}
          viewBox="0 0 100 100"
        >
          <circle cx={50} cy={50} r={7} fill="#39c1d7" />
          <path
            fill="#1f212b"
            d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"
          />
          <path
            fill="#39c1d7"
            d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"
          />
          <path
            fill="#1f212b"
            d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"
          />
        </svg>
      ),
      color: "blue",
    },

    {
      name: "Next JS",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 103.22"
        >
          <path d="M340.36.04h89.18V16.5h-35.38v86.6h-17.69V16.5h-36.11V.04zM503.8 70.86c-.19-1.82-1.03-3.25-2.49-4.27-1.48-1.03-3.38-1.54-5.72-1.54-1.64 0-3.05.25-4.23.74-1.17.49-2.08 1.15-2.71 1.99-.62.84-.93 1.8-.96 2.87 0 .9.22 1.68.64 2.33.42.66.98 1.22 1.71 1.67.72.46 1.52.83 2.4 1.14.89.31 1.77.57 2.66.78l4.09 1c1.64.38 3.23.89 4.76 1.54 1.52.64 2.9 1.45 4.11 2.43 1.21.98 2.17 2.16 2.87 3.54.71 1.39 1.07 3.01 1.07 4.87 0 2.52-.65 4.73-1.95 6.64-1.31 1.9-3.19 3.39-5.66 4.46-2.46 1.07-5.43 1.61-8.93 1.61-3.38 0-6.33-.52-8.81-1.56-2.49-1.03-4.44-2.54-5.84-4.52-1.4-1.99-2.15-4.41-2.26-7.26h7.76c.11 1.49.59 2.73 1.41 3.74.82.99 1.9 1.72 3.22 2.22 1.33.48 2.82.73 4.46.73 1.71 0 3.22-.26 4.53-.77 1.29-.51 2.31-1.21 3.04-2.14.75-.9 1.12-1.98 1.13-3.21-.01-1.12-.35-2.05-.99-2.79-.66-.73-1.57-1.34-2.74-1.84-1.17-.49-2.54-.94-4.1-1.33l-4.96-1.25c-3.58-.91-6.42-2.3-8.5-4.15-2.08-1.86-3.11-4.31-3.11-7.39 0-2.53.69-4.75 2.1-6.65 1.39-1.9 3.29-3.38 5.7-4.43 2.42-1.06 5.15-1.58 8.2-1.58 3.09 0 5.8.52 8.14 1.58 2.33 1.05 4.17 2.51 5.5 4.38s2.02 4 2.06 6.42h-7.6zm-40.09-11.8h7.84v30.19c-.01 2.78-.61 5.15-1.79 7.15-1.18 2-2.83 3.52-4.93 4.59-2.1 1.07-4.56 1.61-7.35 1.61-2.55 0-4.84-.46-6.88-1.36-2.04-.9-3.66-2.24-4.84-4.01-1.2-1.78-1.79-3.98-1.79-6.63h7.85c.01 1.16.28 2.16.78 3 .5.84 1.2 1.48 2.08 1.93.9.45 1.94.67 3.1.67 1.26 0 2.33-.26 3.21-.79.87-.52 1.55-1.3 2.01-2.34.46-1.03.7-2.3.71-3.82V59.06zm-30.19 43.41c-1.3 0-2.4-.45-3.32-1.35-.92-.89-1.38-1.98-1.37-3.27-.01-1.25.45-2.32 1.37-3.22.92-.9 2.02-1.35 3.32-1.35 1.25 0 2.34.45 3.26 1.35.93.9 1.4 1.97 1.41 3.22-.01.85-.22 1.63-.66 2.33-.44.71-1 1.26-1.71 1.67-.7.41-1.46.62-2.3.62zm-329-.14L22.11 0H0v103.06h17.69V22.03l65.22 81.07h110.78V86.64H122.2v-27.2h57.49V42.98H122.2V16.5h71.49V.04h-89.18V16.5h.01v85.83zM261.98 73.7l-11.6-14.42-35.37 43.94h23.21l23.76-29.52zM238.22.09h-23.15l82.92 103.05h23.21l-41.46-51.49L321.14.16 297.99.2l-29.84 37.06L238.22.09z" />
        </svg>
      ),
      color: "black",
    },
    {
      name: "Node.js",
      color: "green",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            fill="#388e3c"
            d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
          ></path>
          <path
            fill="#37474f"
            d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
          ></path>
          <path
            fill="#2e7d32"
            d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
          ></path>
          <path
            fill="#4caf50"
            d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
          ></path>
          <path
            fill="#37474f"
            d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
          ></path>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      color: "green",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            fill="#5d4037"
            d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
          ></path>
          <path
            fill="#4caf50"
            d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
          ></path>
          <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
          <path
            fill="#4caf50"
            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
          ></path>
          <path
            fill="#81c784"
            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
          ></path>
        </svg>
      ),
    },
    {
      name: "redux",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 333333 316450"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            d="M230965 221006c12301-1273 21633-11878 21209-24604-423-12725-11029-22906-23754-22906h-848c-13151 424-23331 11453-22906 24603 424 6363 2969 11878 6786 15695-14422 28422-36479 49207-69565 66599-22482 11878-45811 16120-69141 13151-19089-2546-33935-11029-43269-25029-13573-20785-14845-43268-3392-65750 8060-16120 20784-27997 28844-33936-1696-5515-4242-14846-5514-21633-61507 44541-55143 104776-36480 133197 13998 21211 42418 34361 73807 34361 8483 0 16966-849 25450-2969 54296-10606 95442-42845 118771-90779zm74656-52600c-32238-37754-79746-58539-134042-58539h-6786c-3818-7635-11878-12727-20785-12727h-849c-13148 424-23328 11453-22905 24604 424 12725 11028 22906 23754 22906h848c9332-425 17392-6363 20785-14423h7635c32238 0 62779 9332 90352 27573 21208 13999 36479 32239 44962 54297 7211 17817 6787 35208-849 50056-11876 22482-31813 34784-58112 34784-16967 0-33086-5091-41570-8909-4665 4242-13150 11028-19088 15272 18241 8483 36905 13150 54720 13150 40722 0 70839-22483 82292-44965 12301-24604 11452-67023-20361-103079zM90137 228216c424 12726 11029 22906 23754 22906h849c13150-423 23330-11453 22905-24603-423-12726-11029-22906-23754-22906h-848c-849 0-2122 0-2969 423-17392-28845-24603-60234-22057-94170 1695-25452 10180-47510 25026-65751 12301-15695 36055-23331 52174-23754 44962-849 64050 55144 65323 77628 5515 1272 14846 4242 21210 6363C246659 35633 204241 0 163521 0c-38177 0-73384 27573-87383 68296-19512 54297-6786 106472 16968 147620-2120 2969-3393 7635-2969 12302v-1z"
            fill="#764abc"
          />
        </svg>
      ),
      color: "purple",
    },

    {
      name: "firebase",
      color: "yellow",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ff8f00"
            d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
          ></path>
          <path
            fill="#ffa000"
            d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
          ></path>
          <path
            fill="#ff6f00"
            d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
          ></path>
          <path
            fill="#ffc400"
            d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
          ></path>
        </svg>
      ),
    },
    {
      name: "typescript",
      color: "light-blue",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="96"
          height="96"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1"
            x1="6"
            x2="42"
            y1="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0d61a9"></stop>
            <stop offset="1" stopColor="#16528c"></stop>
          </linearGradient>
          <path
            fill="url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)"
            d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"
          ></path>
          <path
            d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z"
            opacity=".05"
          ></path>
          <path
            d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z"
            opacity=".05"
          ></path>
          <path
            d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z"
            opacity=".05"
          ></path>
          <path
            fill="#fff"
            d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"
          ></path>
          <polygon
            fill="#fff"
            points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"
          ></polygon>
        </svg>
      ),
    },

    {
      name: "Github",
      color: "black",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="90"
          height="90"
          viewBox="0 0 50 50"
        >
          <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
        </svg>
      ),
    },
    {
      name: "tailwind css",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={96}
          height={96}
          viewBox="0 0 48 48"
        >
          <path
            fill="#00acc1"
            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
          />
        </svg>
      ),
      color: "green",
    },
    {
      name: "material UI",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={80}
          height={80}
          viewBox="0 0 48 48"
        >
          <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25" />
          <polygon fill="#0288d1" points="47,20 41,24 41,37 47,33" />
          <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13" />
          <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25" />
          <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5" />
          <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5" />
          <polygon fill="#0288d1" points="35,26 18,37 18,30 35,19" />
          <polygon fill="#0288d1" points="47,34 30,45 30,38 47,27" />
          <polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765" />
        </svg>
      ),
      color: "light-blue",
    },
  ];
  return (
    <div className="TechStack__outerContainer">
      {techIcons.map((tech) => (
        <Card
          key={tech.name}
          color={tech.color}
          svg={tech.svg}
          name={tech.name}
        />
      ))}
    </div>
  );
}

export default TechStack;

// {
//   name: "javascript",
//   svg: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       x="0px"
//       y="0px"
//       width={70}
//       height={70}
//       viewBox="0 0 64 64"
//     >
//       <path
//         fill="#f6d397"
//         d="M5.015,7.244l5.466,45.246c0.194,1.603,1.337,2.935,2.9,3.379l17.535,4.977	c0.709,0.201,1.46,0.206,2.172,0.013l18.442-4.996c1.614-0.437,2.789-1.817,2.955-3.471l4.549-45.187C59.153,6.024,58.22,5,57.025,5	H7.019C5.809,5,4.87,6.051,5.015,7.244z"
//       />
//       <path
//         fill="#f9e3ae"
//         d="M52.357,10H32v46c0.298,0.002,0.595-0.039,0.885-0.123l15.002-4.371	c1.313-0.382,2.269-1.59,2.404-3.037l3.701-36.539C54.088,10.896,53.329,10,52.357,10z"
//       />
//       <path
//         fill="#8d6c9f"
//         d="M32.025,62c-0.465,0-0.93-0.064-1.382-0.191l-17.536-4.978c-1.956-0.556-3.377-2.213-3.619-4.221	L4.021,7.364c-0.103-0.85,0.165-1.705,0.733-2.347C5.328,4.371,6.153,4,7.019,4h50.007c0.854,0,1.672,0.363,2.244,0.995	c0.567,0.628,0.845,1.47,0.76,2.311L55.48,52.492c-0.206,2.051-1.688,3.794-3.688,4.336L33.35,61.824	C32.916,61.941,32.471,62,32.025,62z M7.019,6c-0.298,0-0.57,0.122-0.767,0.344C6.06,6.561,5.973,6.838,6.008,7.124l0,0	l5.467,45.246c0.146,1.206,1.001,2.202,2.18,2.537l17.535,4.977c0.533,0.152,1.103,0.155,1.637,0.009l18.442-4.996	c1.205-0.326,2.098-1.374,2.222-2.605l4.549-45.187c0.028-0.284-0.062-0.557-0.253-0.769C57.59,6.119,57.319,6,57.025,6H7.019z"
//       />
//       <path
//         fill="#8d6c9f"
//         d="M57,12c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C58,11.552,57.553,12,57,12z M52,12	c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C53,11.552,52.553,12,52,12z M47,12c-0.553,0-1-0.448-1-1V9	c0-0.552,0.447-1,1-1s1,0.448,1,1v2C48,11.552,47.553,12,47,12z M42,12c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2	C43,11.552,42.553,12,42,12z M37,12c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C38,11.552,37.553,12,37,12z M32,12	c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C33,11.552,32.553,12,32,12z M27,12c-0.553,0-1-0.448-1-1V9	c0-0.552,0.447-1,1-1s1,0.448,1,1v2C28,11.552,27.553,12,27,12z M22,12c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2	C23,11.552,22.553,12,22,12z M17,12c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C18,11.552,17.553,12,17,12z M12,12	c-0.553,0-1-0.448-1-1V9c0-0.552,0.447-1,1-1s1,0.448,1,1v2C13,11.552,12.553,12,12,12z M7,12c-0.553,0-1-0.448-1-1V9	c0-0.552,0.447-1,1-1s1,0.448,1,1v2C8,11.552,7.553,12,7,12z"
//       />
//       <path
//         fill="#faefde"
//         d="M24,19c0,8.333,0,16.667,0,25c-3-0.667-6-1.333-9-2c0.205,2,0.41,4,0.615,6	c4.462,1.272,8.923,2.543,13.385,3.815V19C27.333,19,25.667,19,24,19z"
//       />
//       <path
//         fill="#faefde"
//         d="M49.821,24.048L50.256,19C45.171,19,40.085,19,35,19c0,7.333,0,14.667,0,22	c2.982-0.689,5.964-1.378,8.946-2.066l-0.316,4.733C40.754,44.444,37.877,45.222,35,46c0,2,0,4,0,6	c4.244-1.219,8.488-2.437,12.732-3.656l1.33-15.461C46.042,33.255,43.021,33.628,40,34c0-3.333,0-6.667,0-10	C43.274,24.016,46.547,24.032,49.821,24.048z"
//       />
//       <path
//         fill="#8d6c9f"
//         d="M29,52.815c-0.092,0-0.184-0.013-0.274-0.038l-13.385-3.815c-0.394-0.112-0.679-0.453-0.721-0.86	l-0.615-6c-0.032-0.32,0.091-0.636,0.33-0.849c0.241-0.214,0.567-0.299,0.882-0.229L23,42.753V19c0-0.552,0.447-1,1-1h5	c0.553,0,1,0.448,1,1v32.815c0,0.313-0.147,0.609-0.397,0.798C29.427,52.746,29.215,52.815,29,52.815z M16.541,47.224L28,50.49V20	h-3v24c0,0.303-0.138,0.59-0.374,0.78c-0.237,0.19-0.546,0.262-0.843,0.196l-7.647-1.699L16.541,47.224z"
//       />
//       <path
//         fill="#8d6c9f"
//         d="M35,53c-0.215,0-0.426-0.069-0.602-0.201C34.147,52.61,34,52.314,34,52v-6	c0-0.452,0.303-0.848,0.739-0.965l7.94-2.147l0.179-2.677l-7.634,1.763c-0.293,0.071-0.607-0.001-0.847-0.191S34,41.305,34,41V19	c0-0.552,0.447-1,1-1h15.257c0.28,0,0.548,0.118,0.737,0.324c0.189,0.207,0.283,0.483,0.259,0.762l-0.436,5.048	c-0.044,0.519-0.521,0.946-1.001,0.914L41,25.005v7.864l7.94-0.979c0.296-0.036,0.599,0.063,0.816,0.272	c0.217,0.209,0.328,0.505,0.302,0.806l-1.33,15.461c-0.035,0.413-0.322,0.761-0.72,0.875l-12.732,3.655	C35.186,52.987,35.093,53,35,53z M36,46.766v3.907l10.795-3.1l1.165-13.546l-7.838,0.966c-0.281,0.034-0.569-0.054-0.784-0.244	S39,34.287,39,34V24c0-0.266,0.106-0.521,0.295-0.709s0.413-0.286,0.71-0.291l8.899,0.044L49.167,20H36v19.743l7.722-1.783	c0.307-0.073,0.632,0.007,0.873,0.213c0.241,0.205,0.37,0.512,0.35,0.828l-0.316,4.733c-0.028,0.426-0.325,0.787-0.737,0.898	L36,46.766z"
//       />
//     </svg>
//   ),
//   color: "yellow",
// },
