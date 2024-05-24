import PropTypes from 'prop-types';

const SvgIcon = ({ iconData }) => {
    if (!iconData) {
        return null;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={iconData.width} height={iconData.height} viewBox={iconData.viewBox}>
            {iconData.defs && (
                <defs>
                    {iconData.defs.map((def, index) => (
                        <linearGradient key={index} id={def.id} x1={def.x1} y1={def.y1} x2={def.x2} y2={def.y2} gradientUnits={def.gradientUnits}>
                            {def.stops.map((stop, stopIndex) => (
                                <stop key={stopIndex} offset={stop.offset} stopColor={stop.stopColor} />
                            ))}
                        </linearGradient>
                    ))}
                </defs>
            )}
            {iconData.paths.map((path, index) => {
                if (typeof path === 'string') {
                    return <path key={index} d={path}></path>;
                } else if (path.d) {
                    return <path key={index} {...path}></path>;
                } else if (path.cx && path.cy && path.r) {
                    return <circle key={index} {...path}></circle>;
                }
                return null;
            })}
        </svg>
    );
};

SvgIcon.propTypes = {
    iconData: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        viewBox: PropTypes.string.isRequired,
        defs: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                x1: PropTypes.string.isRequired,
                y1: PropTypes.string.isRequired,
                x2: PropTypes.string.isRequired,
                y2: PropTypes.string.isRequired,
                gradientUnits: PropTypes.string.isRequired,
                stops: PropTypes.arrayOf(
                    PropTypes.shape({
                        offset: PropTypes.string.isRequired,
                        stopColor: PropTypes.string.isRequired
                    })
                ).isRequired
            })
        ),
        paths: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    d: PropTypes.string,
                    fill: PropTypes.string,
                    cx: PropTypes.string,
                    cy: PropTypes.string,
                    r: PropTypes.string
                })
            ])
        ).isRequired
    }).isRequired
};

export default SvgIcon;
