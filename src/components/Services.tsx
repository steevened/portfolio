import bg from '../assets/block2.svg';
import tw from 'twin.macro';

const styles = {
  container: [tw`bg-cover bg-center h-screen`],
  services: [
    tw`h-full w-5/6 mx-auto`,
    tw`flex flex-col items-center justify-center gap-y-10`,
    tw`md:(flex-row gap-x-6)`,
    tw`lg:(gap-x-16)`,
  ],
  box: [
    tw`w-40 h-40`,
    tw`md:(w-48 h-48)`,
    tw`lg:(w-56 h-56)`,
    tw`bg-blur`,
    tw`rounded-lg shadow-lg shadow-black/40`,
  ],
};

function Services() {
  return (
    <div css={styles.container}>
      <div css={styles.services}>
        <div css={styles.box}></div>
        <div css={styles.box}></div>
        <div css={styles.box}></div>
      </div>
    </div>
  );
}

export default Services;
