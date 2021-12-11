import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <g transform="matrix(0.0979592,0,0,0.154341,0,0)">
        <g transform="matrix(10.2083,0,0,6.47917,-0.183492,8.153)">
          <path d="M39.842,69.258C39.864,69.253 39.885,69.248 39.907,69.241C40.332,69.121 40.786,69.257 41.161,69.476C41.716,69.8 42.161,70.308 42.422,70.895C42.591,71.277 42.679,71.75 42.44,72.11C42.429,72.126 42.419,72.142 42.409,72.159C41.551,73.588 40.539,74.919 39.48,76.205C39.235,76.492 39,76.793 38.71,77.035C38.359,77.25 37.916,77.225 37.553,77.069C36.798,76.744 36.187,76.086 35.939,75.302C35.847,75.006 35.796,74.663 35.965,74.394C35.97,74.385 35.976,74.377 35.981,74.368C36.868,72.873 37.908,71.475 38.991,70.116C39.156,69.925 39.312,69.724 39.482,69.539C39.588,69.425 39.684,69.294 39.842,69.258ZM47.505,69.675C47.681,70.145 48.087,70.44 48.481,70.694C48.51,70.712 48.539,70.73 48.569,70.746C50.599,71.835 52.68,72.827 54.744,73.85C55.315,74.138 55.89,74.419 56.457,74.715C56.138,75.016 55.801,75.29 55.448,75.54C55.444,75.543 55.441,75.546 55.437,75.548C54.648,76.12 53.611,76.107 52.671,76.094C50.506,76.019 48.386,75.491 46.326,74.851L46.145,74.789C46.849,73.641 47.157,72.255 46.999,70.917C46.728,68.558 45.176,66.401 43.033,65.383C42.451,65.09 41.83,64.912 41.197,64.785C41.197,64.452 41.173,64.119 41.097,63.79C40.734,62.092 39.815,60.461 38.382,59.439C37.645,58.894 36.823,58.452 35.941,58.197C35.789,58.152 35.636,58.121 35.48,58.1C35.46,57.494 35.409,56.891 35.244,56.305C34.721,54.31 33.226,52.587 31.308,51.798C31.305,51.798 31.303,51.797 31.301,51.796C29.681,51.14 27.759,51.08 26.159,51.839C26.154,51.842 26.149,51.844 26.143,51.847C25.364,52.23 24.746,52.815 24.2,53.469C23.472,52.412 22.471,51.54 21.295,51.018C19.645,50.251 17.646,50.235 16.014,51.06C15.704,51.209 15.424,51.404 15.148,51.606C14.304,50.564 13.47,49.513 12.603,48.491C16.351,41.843 20.069,35.178 23.856,28.553C24.736,29.069 25.628,29.565 26.599,29.887C28.08,30.409 29.636,30.602 31.175,30.873C29.78,32.923 28.287,34.905 27.145,37.104C26.34,38.614 26.069,40.376 26.323,42.063C26.326,42.084 26.329,42.104 26.333,42.124C26.416,42.536 26.602,42.923 26.855,43.258C27.299,43.857 27.843,44.412 28.538,44.722C28.54,44.722 28.542,44.723 28.543,44.724C29.261,45.039 30.054,45.11 30.826,45.138C30.83,45.138 30.834,45.139 30.838,45.139C33.322,45.206 35.753,44.374 37.864,43.11C37.866,43.109 37.867,43.108 37.869,43.107C39.319,42.229 40.643,41.146 41.806,39.913C42.573,39.109 43.248,38.226 43.944,37.36L44.589,37.172C44.849,37.094 45.11,37.016 45.37,36.938L46.595,36.568C49.998,38.308 53.369,40.117 56.631,42.114C56.632,42.115 56.633,42.115 56.634,42.116C60.017,44.172 63.292,46.401 66.495,48.726C69.562,50.989 72.655,53.224 75.562,55.693C76.073,56.163 76.65,56.584 76.993,57.189C77.379,57.92 77.245,58.859 76.732,59.492C76.73,59.494 76.727,59.497 76.725,59.5C76.536,59.737 76.287,59.95 75.982,59.996C75.98,59.997 75.977,59.997 75.975,59.997C75.326,60.099 74.666,60.09 74.011,60.121L73.95,60.085C70.659,58.101 67.359,56.125 64.062,54.144C64.058,54.142 64.055,54.14 64.052,54.138C63.097,53.576 62.15,53.001 61.184,52.462C60.315,51.975 59.448,51.464 58.508,51.121C58.488,51.114 58.467,51.107 58.446,51.1C57.785,50.898 56.963,50.873 56.384,51.396C56.351,51.425 56.321,51.456 56.292,51.488C55.883,51.942 55.638,52.575 55.664,53.188C55.667,53.239 55.672,53.29 55.68,53.34C55.758,53.806 55.979,54.169 56.293,54.467C56.502,54.666 56.779,54.818 57.004,54.988C57.028,55.007 57.054,55.024 57.079,55.041C61.457,57.875 65.957,60.512 70.418,63.211C70.465,63.725 70.486,64.242 70.271,64.716C69.968,65.365 69.289,65.797 68.583,65.883C68.109,65.928 67.625,66.012 67.172,65.88C66.45,65.612 65.793,65.218 65.128,64.852C61.706,62.912 58.323,60.906 54.868,59.024C54.829,59.003 54.789,58.984 54.747,58.966C54.6,58.905 54.448,58.802 54.292,58.749C53.921,58.625 53.54,58.616 53.139,58.788C52.375,59.092 51.7,59.768 51.513,60.594C51.485,60.716 51.476,60.841 51.485,60.966C51.547,61.802 52.148,62.455 52.815,62.859C55.969,64.838 59.226,66.648 62.435,68.538C62.972,68.87 63.531,69.18 64.006,69.598C63.866,70.183 63.691,70.799 63.198,71.169C63.184,71.179 63.171,71.19 63.157,71.201C62.71,71.567 62.098,71.572 61.54,71.589C60.78,71.59 60.065,71.296 59.375,71.009C56.64,69.829 54.003,68.436 51.292,67.202C51.274,67.194 51.257,67.187 51.239,67.18C50.671,66.951 50.099,66.677 49.479,66.639C49.384,66.633 49.288,66.638 49.194,66.654C47.877,66.874 47.009,68.44 47.507,69.68L47.505,69.675ZM33.979,62.556C35.134,62.331 36.349,63.213 36.585,64.357C36.648,64.665 36.66,64.982 36.632,65.295C36.54,65.686 36.258,65.987 36.048,66.312C34.984,67.843 33.877,69.345 32.775,70.852C32.327,71.434 31.905,72.041 31.384,72.563C31.384,72.563 31.384,72.563 31.384,72.563C31.26,72.687 31.136,72.839 30.961,72.867C30.481,72.905 29.988,72.857 29.582,72.613C29.58,72.611 29.577,72.61 29.575,72.608C28.85,72.178 28.322,71.386 28.295,70.537C28.295,70.53 28.294,70.524 28.294,70.518C28.277,70.157 28.452,69.823 28.659,69.534C28.665,69.526 28.671,69.517 28.677,69.508C30.124,67.37 31.688,65.31 33.321,63.311C33.453,63.17 33.576,63.018 33.699,62.865C33.759,62.79 33.819,62.716 33.884,62.646C33.909,62.618 33.958,62.575 33.979,62.556ZM28.348,55.771C28.361,55.769 28.374,55.766 28.388,55.764C29.444,55.553 30.437,56.388 30.829,57.341C30.997,57.797 31.178,58.335 30.894,58.743C30.884,58.757 30.875,58.772 30.865,58.787C30.023,60.112 29.058,61.354 28.137,62.625C27.282,63.785 26.438,64.952 25.568,66.1C25.091,66.714 24.648,67.371 24.043,67.868C24.039,67.871 24.035,67.875 24.031,67.878C23.901,67.988 23.722,68.014 23.555,67.998C23.514,67.994 23.472,67.992 23.431,67.992C22.185,67.995 21.149,66.797 21.148,65.578C21.148,65.57 21.148,65.562 21.148,65.554C21.142,65.274 21.307,65.054 21.457,64.831C21.655,64.537 21.877,64.254 22.066,63.966C23.812,61.53 25.571,59.074 27.446,56.71C27.632,56.499 27.805,56.271 27.993,56.061C28.099,55.943 28.186,55.798 28.348,55.771ZM18.096,55.016C18.118,55.011 18.14,55.005 18.163,54.998C19.146,54.701 20.152,55.388 20.639,56.238C20.887,56.672 20.882,57.196 20.858,57.685C20.857,57.687 20.857,57.689 20.857,57.692C20.843,58.003 20.603,58.239 20.433,58.488C19.815,59.349 19.207,60.238 18.45,60.997C18.448,60.999 18.447,61 18.445,61.002C18.272,61.178 18.073,61.384 17.816,61.369C17.81,61.369 17.803,61.369 17.797,61.368C16.824,61.326 15.974,60.619 15.573,59.75C15.396,59.36 15.259,58.876 15.49,58.495C15.496,58.486 15.502,58.476 15.508,58.466C16.096,57.438 16.802,56.48 17.558,55.569C17.681,55.431 17.796,55.291 17.921,55.164C17.975,55.108 18.018,55.035 18.096,55.016ZM30.827,40.71C30.823,40.396 30.82,40.081 30.874,39.771C31.025,39.14 31.443,38.635 31.755,38.09C32.803,36.399 33.958,34.761 35.103,33.119C36.03,31.806 36.962,30.493 37.933,29.212C38.202,28.874 38.427,28.502 38.773,28.254C38.774,28.253 38.774,28.253 38.775,28.253C39.16,27.975 39.633,27.866 40.079,27.72C41.602,27.289 43.184,27.055 44.762,26.846C44.762,26.846 44.762,26.846 44.762,26.846C47.598,26.467 50.464,26.408 53.32,26.412C55.324,26.415 57.327,26.607 59.293,26.998C59.298,26.999 59.303,27 59.308,27.001C61.699,27.447 64.049,28.112 66.461,28.45C67.804,28.641 69.182,28.678 70.519,28.415C71.004,28.323 71.482,28.178 71.969,28.087C73.31,30.368 74.584,32.693 75.893,34.993C78.316,39.285 80.734,43.581 83.167,47.867C81.669,49.408 80.138,50.958 78.285,52.049C75.713,49.945 73.075,47.924 70.386,45.974C70.386,45.974 70.386,45.973 70.385,45.973C67.073,43.573 63.728,41.215 60.262,39.04C60.258,39.038 60.253,39.035 60.249,39.033C56.651,36.835 52.97,34.77 49.207,32.868C49.19,32.859 49.173,32.851 49.155,32.843C48.448,32.525 47.753,32.114 46.986,31.972C46.825,31.942 46.66,31.944 46.5,31.977C44.758,32.34 43.091,32.984 41.392,33.499C41.116,33.582 40.878,33.757 40.716,33.995C40.3,34.604 39.91,35.232 39.442,35.802C39.441,35.803 39.44,35.804 39.439,35.805C38.569,36.872 37.552,37.815 36.449,38.637C35.577,39.276 34.648,39.862 33.616,40.206C32.838,40.464 32.028,40.638 31.208,40.679C31.089,40.684 30.955,40.712 30.827,40.71ZM94.52,45.375C93.107,46.345 91.629,47.227 90.136,48.08C89.731,48.295 89.342,48.536 88.937,48.744C88.214,47.56 87.544,46.343 86.837,45.15C82.847,38.162 78.885,31.159 75.038,24.093C74.786,23.619 74.519,23.151 74.274,22.672C75.642,21.719 77.088,20.862 78.523,19.992L78.523,19.992C78.95,19.758 79.364,19.493 79.792,19.259C80.527,20.399 81.188,21.586 81.885,22.749C85.636,29.211 89.308,35.719 92.887,42.277C93.441,43.304 93.998,44.331 94.52,45.375ZM16.169,19.175L16.426,19.327C18.254,20.392 20.056,21.502 21.808,22.688C20.763,24.693 19.649,26.662 18.562,28.645C15.685,33.847 12.766,39.025 9.816,44.186C8.976,45.639 8.144,47.099 7.254,48.523L7.128,48.723C7.023,48.667 6.919,48.61 6.815,48.554C5.083,47.599 3.394,46.568 1.739,45.487C1.666,45.437 1.591,45.391 1.516,45.345C2.723,43.069 4.004,40.831 5.244,38.573C8.748,32.262 12.28,25.966 15.846,19.689C15.946,19.513 16.054,19.342 16.169,19.175Z"/>
        </g>
      </g>  
    </Svg>
  );
};

export default Icon;