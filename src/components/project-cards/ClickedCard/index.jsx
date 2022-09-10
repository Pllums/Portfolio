import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { projects } from "../../Projects";

// export default function ClickedCard(props) {
// 	return (
// 		<motion.div
// 			className="clicked-card"
// 			layoutId={props.layoutId}
// 			initial={{ position: "relative", opacity: 0 }}
// 			animate={{
// 				position: "absolute",
// 				x: 0,
// 				y: 0,
// 				opacity: 1,
// 				scale: 3,
// 				transition: { duration: 0.5 },
// 			}}
// 			exit={{
// 				opacity: 0,
// 				scale: 0,
// 				transition: {
// 					delay: 0.3,
// 					duration: 0.5,
// 				},
// 			}}>
// 			<motion.h2>Test</motion.h2>
// 			<hr />
// 			<motion.span>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
// 				natus, nisi tenetur fuga iusto facilis ullam quam doloribus. Pariatur
// 				enim accusamus hic harum nihil?
// 			</motion.span>
// 		</motion.div>
// 	);
// }

export default function ClickedCard(props) {
	return (
		<motion.div
			className="backdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<motion.div
				className="clicked-card"
				onClick={(e) => {
					e.stopPropagation();
				}}
				initial={{ opacity: 0 }}
				animate={{
					position: "absolute",
					x: 0,
					y: 0,
					opacity: 1,
					scale: 1,
					transition: { duration: 0.5 },
				}}
				exit={{
					opacity: 0,
					scale: 0,
					transition: {
						delay: 0.3,
						duration: 0.5,
					},
				}}>
				<motion.h2>{props.selectedProject.title}</motion.h2>
				<hr />
				<motion.span>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo dolorum
					quidem placeat quod officiis. Assumenda eveniet non recusandae
					laborum. Sequi voluptates blanditiis veritatis? Temporibus inventore
					obcaecati, repellat molestiae, illum cupiditate consequuntur nisi
					sequi quam numquam soluta, voluptatem sunt quos error modi architecto
					impedit veritatis illo tempore. Ducimus fuga pariatur quam distinctio
					ratione sint voluptate ullam libero, nobis minus id vitae placeat
					explicabo ipsam illum error mollitia. Nulla quaerat magnam
					exercitationem, adipisci optio perferendis quos distinctio ratione
					placeat neque voluptatum, assumenda tenetur ullam magni id eos quasi
					minima blanditiis explicabo dolore dolores! Voluptas corrupti
					recusandae nesciunt molestias qui. Consequuntur, soluta excepturi.
					Dolores, blanditiis? Necessitatibus reiciendis sit dolorum optio
					temporibus aut tenetur. Error iusto enim magni ea. Quaerat officiis
					accusantium ipsam exercitationem harum modi asperiores nesciunt itaque
					laboriosam ab molestiae magni, dolorem nihil atque at praesentium a.
					Impedit veritatis dolorum eum excepturi est ipsum, labore recusandae
					harum dignissimos ex odit repellat, totam iste voluptates, deleniti
					eveniet? Libero ut qui ipsa debitis voluptas sunt perferendis dolore
					aliquid. Nesciunt minima blanditiis autem velit debitis neque,
					corrupti ea nulla? Iure, asperiores. Distinctio, magnam provident quam
					odit consectetur eligendi reprehenderit inventore molestiae esse enim
					dignissimos autem aliquid velit culpa porro facere iure, totam
					incidunt alias optio labore ut recusandae amet. Tempore adipisci
					provident culpa aliquam dolorum harum ipsum laborum, doloribus magni,
					necessitatibus expedita velit accusamus excepturi fugiat voluptatem?
					Voluptatibus impedit accusantium doloremque voluptatem maxime, dolore
					nobis, asperiores dignissimos accusamus dolores ea quos eaque et, quas
					amet fuga? Quae dignissimos nesciunt, quibusdam illo veritatis
					officiis magnam in culpa, tempore enim vitae omnis accusantium officia
					incidunt totam itaque! Dicta asperiores, ullam, sequi ipsam, eos
					deleniti placeat temporibus tempore aspernatur sed voluptatum. Fuga
					nesciunt itaque nemo sapiente aliquid amet maxime incidunt facere
					aperiam ipsum alias, numquam sequi similique porro obcaecati
					asperiores deserunt eaque necessitatibus suscipit perferendis?
					Quisquam, nesciunt praesentium?
				</motion.span>
			</motion.div>
		</motion.div>
	);
}
