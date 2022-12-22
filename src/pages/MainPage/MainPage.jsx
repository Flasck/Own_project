// import styles from "./MainPage.module.css"
import React, { useState } from "react"
import { HeroBlock } from "@components/HeroBlock/HeroBlock"
import { TeamSlider } from "@components/TeamSlider/TeamSlider"
import { MapBlock } from "@components/MapBlock/MapBlock"
import { ModalWindowContact } from "@components/ModalWindowContact/ModalWindowContact"

import { SuccessModal } from "@components/ModalWindowContact/SuccessModal/SuccessModal"
import { InProgressModal } from "@components/ModalWindowContact/InProgressModal/InProgressModal"
import { FailModal } from "@components/ModalWindowContact/FailModal/FailModal"
import { useSelector } from "react-redux"
import { selectIsFeedBackFailed, selectIsFeedBackLoading, selectIsFeedBackSuccess } from "@store/FeedbackSlice/selectors"

export const MainPage = () =>
{
	const isFeedBackLoading = useSelector(selectIsFeedBackLoading)
	const isFeedBackSuccess = useSelector(selectIsFeedBackSuccess)
	const isFeedBackFailed = useSelector(selectIsFeedBackFailed)
	const [viewModal, setViewModal] = useState(false)

	return (
		<>
			{viewModal && <ModalWindowContact setView={setViewModal} />}
			{isFeedBackSuccess && <SuccessModal setView={setViewModal} />}
			{isFeedBackLoading && <InProgressModal setView={setViewModal} />}
			{isFeedBackFailed && <FailModal setView={setViewModal} />}
			<HeroBlock />
			<TeamSlider />
			<MapBlock setViewModal={setViewModal} />
		</>
	)
}
