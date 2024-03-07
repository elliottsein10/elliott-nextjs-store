import styles from './Description.module.sass'
import Image from 'next/image'

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image
                src="/images/description.jpeg"
                alt="products marketplace"
                width={500}
                height={300}
            />
            <div className={styles.Description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam, quod perferendis cum officia alias expedita explicabo ad labore earum, necessitatibus corrupti neque? Ea, qui officiis repellendus dignissimos ad odit!</p>
            </div >
        </section>
    )
}