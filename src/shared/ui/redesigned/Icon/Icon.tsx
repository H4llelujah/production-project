import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClicableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClicableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, width = 32, height = 32, ...otherProps } = props;

    if (props.clickable) {
        return (
            <button
                type="button"
                className={classNames(cls.button, {}, [className])}
                onClick={props.onClick}
                style={{ height, width }}
            >
                <Svg
                    className={classNames(cls.Icon, {}, [])}
                    width={width}
                    height={height}
                    {...otherProps}
                    onClick={undefined}
                />
            </button>
        );
    }

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );
});
