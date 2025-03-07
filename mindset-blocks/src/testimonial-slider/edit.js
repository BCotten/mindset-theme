/**
 * Imports.
 */
import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	useBlockProps,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import { SwiperInit } from "./swiper-init";

/**
 * Export.
 */
export default function Edit({ attributes, setAttributes }) {
	// Destructure attributes
	const { navigation, pagination, arrowColor } = attributes;

	// Initialize Swiper
	const swiper = SwiperInit(".swiper", { navigation, pagination });

	// Create a style object for the arrow color
	const arrowColorStyle = {
		"--arrow-color": arrowColor,
	};

	// Use useBlockProps to apply the style
	const blockProps = useBlockProps({ style: arrowColorStyle });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "testimonial-slider")}>
					<PanelRow>
						<ToggleControl
							label={__("Navigation", "testimonial-slider")}
							checked={navigation}
							onChange={(value) => setAttributes({ navigation: value })}
							help={__(
								"Navigation will display arrows so users can navigate forward and backward.",
								"testimonial-slider",
							)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__("Pagination", "testimonial-slider")}
							checked={pagination}
							onChange={(value) => setAttributes({ pagination: value })}
							help={__(
								"Pagination will display dots so users can navigate to any slide.",
								"testimonial-slider",
							)}
						/>
					</PanelRow>
				</PanelBody>

				{/* Add PanelColorSettings for arrow color */}
				<PanelColorSettings
					title={__("Arrow Color", "testimonial-slider")}
					colorSettings={[
						{
							label: __("Arrow Color", "testimonial-slider"),
							value: arrowColor,
							onChange: (newColor) => setAttributes({ arrowColor: newColor }),
						},
					]}
				/>
			</InspectorControls>

			<div {...blockProps}>
				<ServerSideRender
					block="mindset-blocks/testimonial-slider"
					attributes={attributes}
				/>
			</div>
		</>
	);
}
